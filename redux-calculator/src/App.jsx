import Calculator from "./components/Calculator";
import HistoryList from "./components/HistoryList";
import "./components/calculator.css";

const App = () => {
  return (
    <div className="app-container">
      <Calculator />
      <HistoryList />
    </div>
  );
};

export default App;
