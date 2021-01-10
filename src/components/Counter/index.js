import React from "react"
import { Button } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement} from "../../store/actions";
import "./counter.css";

function Counter() {
  const counts = useSelector(state => state.counter);
  const dispatch = useDispatch()
  return (
    <div className="">
      Redux Counter: {counts}  
      <span id="counter-btn-container">
        <Button onClick={() => dispatch(increment(5))}>+5</Button>
        <Button onClick={() => dispatch(decrement())}>-1</Button>
      </span>
    </div>
  )
}

export default Counter;