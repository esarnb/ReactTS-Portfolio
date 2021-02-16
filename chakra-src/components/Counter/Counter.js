import React from "react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement} from "../../store/actions";
import "./Counter.css";

function Counter() {
  const counts = useSelector(state => state.counter);
  const dispatch = useDispatch()
  return (
    <div className="">
      Redux Counter: {counts}  
      <ButtonGroup id="counter-btn-container">
        <Button onClick={() => dispatch(increment(5))}>+5</Button>
        <Button onClick={() => dispatch(decrement())}>-1</Button>
      </ButtonGroup>
    </div>
  )
}

export default Counter;