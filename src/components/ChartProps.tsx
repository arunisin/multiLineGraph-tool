import { ComponentProps, FC, useRef, useState } from "react";
import { CartesianGrid, LineChart } from "recharts";
import { useDataContext } from "./dataContext";

const convertToRechartsData = (data: { key: string; vals: number[] }[]) => {
  const length = Math.max(...data.map((item) => item.vals.length)); // Find the maximum length of vals arrays

  const result = Array.from({ length }, (_, index) => {
    const point: Record<string, number | string> = {
      name: `Point ${index + 1}`,
    };

    data.forEach((item) => {
      point[item.key] = item.vals[index] || 0; // Assign value or default to 0 if it's missing
    });

    return point;
  });

  return result;
};

const ChartProps: FC<ComponentProps<"div">> = ({ children, ...props }) => {
  const [width, setWidth] = useState(700);
  const [height, setHeight] = useState(700);
  const [color, setColor] = useState("#ccc");
  const { data } = useDataContext();
  const chartContainerRef = useRef<HTMLDivElement>(null); // Reference to the container div

  // Function to download the SVG
  const handleExportSVG = () => {
    const chartContainer = chartContainerRef.current;

    if (!chartContainer) {
      return;
    }

    // Find the actual SVG element inside the Recharts rendered content
    const svgElement = chartContainer.querySelector("svg");
    if (!svgElement) {
      console.error("SVG element not found!");
      return;
    }

    // Serialize the SVG and create a Blob
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    // Create a download link and trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.download = "graph-export.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Release the object URL
    URL.revokeObjectURL(url);
  };

  return (
    <div {...props}>
      <div style={{ display: "flex" }}>
        <div>
          <label>Width of the graph </label>
          <input
            type="number"
            style={{ maxWidth: "80px", height: "40px" }}
            onChange={(e) => setWidth(+e.target.value)}
            defaultValue={width}
          />
        </div>
        <div>
          <label>Height of the graph </label>
          <input
            type="number"
            style={{ maxWidth: "80px", height: "40px" }}
            defaultValue={height}
            onChange={(e) => setHeight(+e.target.value)}
          />
        </div>
        <div>
          <label>Height of the graph </label>
          <input
            type="color"
            style={{ maxWidth: "80px", height: "40px" }}
            defaultValue={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>
      <div ref={chartContainerRef}>
        <LineChart
          width={width}
          height={height}
          data={convertToRechartsData(data)}
        >
          <CartesianGrid stroke={color} />
          {children}
        </LineChart>
      </div>

      <button onClick={handleExportSVG} style={{ marginTop: "20px" }}>
        Export as SVG
      </button>
    </div>
  );
};

export default ChartProps;
