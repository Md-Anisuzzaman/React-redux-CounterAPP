import { useSelector, useDispatch } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "../services/Actions/CounterAction";




const Counter = () => {

  const count = useSelector(state => state.count);
  const dispatch = useDispatch();


  const handleIncrement = () => {

  }

  return (
    <div>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(incrementCounter())}>Increment</button>
      <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
    </div>
  )
}

export default Counter