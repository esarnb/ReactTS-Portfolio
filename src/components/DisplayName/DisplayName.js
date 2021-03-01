import React from "react"
// import { Button } from 'antd';
import {useSelector} from "react-redux";
import "./DisplayName.css";

function DisplayName() {
  const { username, isLogged } = useSelector(state => state);
  return <div className="nav-displayName text-center floatRight">{isLogged ? username : ""}</div>
}

export default DisplayName;