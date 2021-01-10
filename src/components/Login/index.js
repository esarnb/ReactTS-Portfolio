import React from "react"
import { Button } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {isLogged} from "../../store/actions";
import "./Login.css";

export default function Login() {
  const loggedIn = useSelector(state => state.isLogged);
  const dispatch = useDispatch()
  return <Button id="navLoginBtn" onClick={() => dispatch(isLogged())} >{loggedIn ? "Logout" : "Login"}</Button>
}
