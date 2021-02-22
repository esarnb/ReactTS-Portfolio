import React from "react"
import { Input, Button } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import { setUserName } from "../../store/actions";
// import "./Name.css";

function Name() {
  const dispatch = useDispatch()
  let person = useSelector(state => state.username);
  const updateName = (named) => named ? dispatch(setUserName(named)) : dispatch(setUserName("No Name"))
  return (
    <div>
      Redux Name: {person} 
      <br />
      <Input placeholder="Type your new name here." onChange={(e) => updateName(e.target.value)} />
        <div className="flex-right">
          {/* <Input placeholder="Type your new name here." onChange={(e) => updateName(e.target.value)} onPressEnter={(e) => updateName(e.target.defaultValue)}/> */}
          {/* <Button onClick={(e) => {  updateName(person) }}>submit</Button> */}
        </div>
    </div>
  )
}

export default Name;