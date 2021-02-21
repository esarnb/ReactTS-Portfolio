import React from "react"
import { Button } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import { setUserName } from "../../store/actions";
// import "./Name.css";

function Name() {
  const username = useSelector(state => state.username);
  const dispatch = useDispatch()
  return (
    <div className="">
      Redux Name: {username}  
      <br />
      <span id="Name-btn-container">
        <Button onClick={() => dispatch(setUserName("newNameHere"))}>newNameHere</Button>
      </span>
    </div>
  )
}

export default Name;