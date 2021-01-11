import React, {Fragment} from "react";
import Counter from "../Counter/Counter";
import "./Chat.css";

export default function Chat() {
  return (
    <Fragment>
      <h1 className="page-title text-center">Chat</h1>
      <br /> <br /> <br />
      <div className="floatRight"><Counter /></div>

    </Fragment>
  )
}