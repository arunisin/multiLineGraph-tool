import "./App.css";
import DataContextProvider from "./components/dataContext";
import DrawGraph from "./components/DrawGraph";

function App() {
  return (
    <>
      <DataContextProvider>
        <DrawGraph />
      </DataContextProvider>
    </>
  );
}

export default App;
