import React, { createContext, useContext, ReactNode, useState } from "react";

// Define the structure of the context, including optional strokeColor and strokeWidth
interface LineData {
  vals: number[];
  key: string;
  strokeColor?: string; // Optional property for stroke color
  strokeWidth?: number; // Optional property for stroke width
}

// Define the structure of the context
interface ContextType {
  data: LineData[];
  setData: React.Dispatch<React.SetStateAction<LineData[]>>;
}

// Create the context with an empty default value
export const DataContext = createContext<ContextType | undefined>(undefined);

// DataContextProvider component to provide the context value
const DataContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Initial state with strokeColor and strokeWidth for uv data
  const [data, setData] = useState<LineData[]>([
    {
      key: "x-axis",
      vals: [10, 20, 30, 40, 50, 60],
      strokeColor: "#8884d8", // Default stroke color
      strokeWidth: 2, // Default stroke width
    },
  ]);

  // Provide both data and the function to update it (setData)
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the data context more easily
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }
  return context;
};

export default DataContextProvider;
