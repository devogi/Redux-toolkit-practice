import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actions } from "./store/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const addBy = () => {
    dispatch(actions.addBy(10));
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h4> {counter} </h4>
      <button className="btn" onClick={increment}>
        Increment
      </button>
      <button className="btn" onClick={decrement}>
        Decrement
      </button>
      <button className="btn" onClick={addBy}>
        {" "}
        Add 10{" "}
      </button>
    </div>
  );
}

export default App;
