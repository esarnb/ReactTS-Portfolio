import React from "react"
import { Input, Button } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import { setUserName } from "../../store/actions";
// import "./Name.css";

function Name() {
  const person = useSelector(state => state.username);
  const dispatch = useDispatch()
  const submitting = (newName) => { dispatch(setUserName(newName)) }

  return (
    <div>
      Redux Name: {person} 
      <br />
      <span id="Name-btn-container">
        <Input placeholder="John Smith" onPressEnter={(e) => {
          console.log(e.target.defaultValue);
          dispatch(setUserName(e.target.defaultValue))
        }}/>
        {/* <Button onClick={() => {
          
        }}> Submit </Button> */}
      </span>
    </div>
  )
}

export default Name;