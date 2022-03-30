import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h4> {counter} </h4>
      <button></button>
      <button></button>
      <button></button>
    </div>
  );
}

export default App;
