import { FC } from "react";
import { useDataContext } from "./dataContext";

interface LineProps {
  lineKey: string;
}

const LineProps: FC<LineProps> = ({ lineKey }) => {
  console.log("Line props rendered");

  const { data, setData } = useDataContext();

  // Find the data corresponding to the provided lineKey
  const keyData = data.find((ele) => ele.key === lineKey);

  const handleValueChange = (index: number, newValue: number) => {
    if (keyData) {
      const updatedVals = [...keyData.vals]; // Copy current vals
      updatedVals[index] = newValue; // Update the specific value at index

      // Update the data context with the new value for the lineKey
      setData((prevData) =>
        prevData.map((ele) =>
          ele.key === lineKey ? { ...ele, vals: updatedVals } : ele
        )
      );
    }
  };

  const handleStrokeColorChange = (newColor: string) => {
    // Update the stroke color in the context
    if (keyData) {
      setData((prevData) =>
        prevData.map((ele) =>
          ele.key === lineKey ? { ...ele, strokeColor: newColor } : ele
        )
      );
    }
  };

  const handleStrokeWidthChange = (newWidth: number) => {
    // Update the stroke width in the context
    if (keyData) {
      setData((prevData) =>
        prevData.map((ele) =>
          ele.key === lineKey ? { ...ele, strokeWidth: newWidth } : ele
        )
      );
    }
  };

  const handleAddNewLine = () => {
    // If the key doesn't exist, add a new entry for that key with an empty array of values
    setData((prevData) => [...prevData, { key: lineKey, vals: [0] }]);
  };

  if (!keyData) {
    return (
      <div>
        <button onClick={handleAddNewLine}>
          Start adding values for {lineKey}
        </button>
      </div>
    );
  }

  return (
    <div className="" style={{ display: "flex", flexDirection: "column" }}>
      <div>graph-{lineKey}</div>
      <table>
        <tbody>
          {/* Render the input fields for changing the values in the keyData.vals array */}
          {keyData.vals.map((ele, index) => (
            <tr key={index}>
              <td>
                <input
                  type="number"
                  defaultValue={ele}
                  onChange={(e) =>
                    handleValueChange(index, Number(e.target.value))
                  }
                />
              </td>
            </tr>
          ))}
          <tr>
            {/* Button to add a new value to the vals array */}
            <td>
              <button onClick={() => handleValueChange(keyData.vals.length, 0)}>
                Add Value
              </button>
            </td>
          </tr>
          {/* Input fields for stroke color and stroke width */}
          <tr>
            <td>
              <label>Stroke Color: </label>
              <input
                type="color"
                defaultValue={keyData.strokeColor || "#000000"}
                onChange={(e) => handleStrokeColorChange(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Stroke Width: </label>
              <input
                type="number"
                min={1}
                defaultValue={keyData.strokeWidth || 1}
                onChange={(e) =>
                  handleStrokeWidthChange(Number(e.target.value))
                }
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LineProps;
