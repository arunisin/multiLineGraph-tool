import { useState } from "react";
import { Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import ChartProps from "./ChartProps";
import LineProps from "./LineProps";
import { useDataContext } from "./dataContext";

const DrawGraph = () => {
  const { data, setData } = useDataContext();
  const [lines, setLines] = useState<string[]>([]); // Initial line keys
  const [newLineKey, setNewLineKey] = useState(""); // State to handle adding new line

  // Handle adding a new line
  const handleAddLine = () => {
    if (newLineKey && !lines.includes(newLineKey)) {
      setLines([...lines, newLineKey]);
      setNewLineKey("");
      setData((prevData) => [
        ...prevData,
        {
          key: newLineKey,
          vals: [], // Start with an empty array
          strokeColor: "#000000", // Optional default stroke color
          strokeWidth: 2, // Optional default stroke width
        },
      ]);
    }
  };

  return (
    <div>
      <div
        style={{
          border: "1px solid #333",
          padding: "30px",
          borderRadius: "20px",
        }}
      >
        <ChartProps>
          {lines.map((lineKey) => {
            const lineData = data.find((line) => line.key === lineKey);
            return (
              lineData && (
                <Line
                  key={lineKey}
                  type="monotone"
                  dataKey={lineKey}
                  stroke={lineData.strokeColor || "#8884d8"}
                  strokeWidth={lineData.strokeWidth || 2}
                />
              )
            );
          })}
          <XAxis dataKey="x-axis" />
          <YAxis />
          <Tooltip />
          <Legend />
        </ChartProps>
        <div>
          <p>Change these values to change x-axis values</p>
          <LineProps key={"x-axis"} lineKey={"x-axis"} />
        </div>
      </div>

      {/* LineProps for each line */}
      <h2>Add a line</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {lines.map((lineKey) => (
          <div style={{ padding: "20px 0" }} key={lineKey}>
            <h3>Values for {lineKey}</h3>
            <LineProps lineKey={lineKey} />
          </div>
        ))}
      </div>

      {/* Input to add a new line */}
      <div style={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Enter new line key"
          value={newLineKey}
          onChange={(e) => setNewLineKey(e.target.value)}
          style={{ padding: "10px", marginRight: "10px", flex: "1" }}
        />
        <button
          onClick={handleAddLine}
          disabled={!newLineKey.trim()} // Disable if input is empty
          style={{
            padding: "10px 20px",
            backgroundColor: newLineKey.trim() ? "#4CAF50" : "#ccc",
            color: "#fff",
            border: "none",
            cursor: newLineKey.trim() ? "pointer" : "not-allowed",
          }}
        >
          Add New Line
        </button>
      </div>
    </div>
  );
};

export default DrawGraph;
