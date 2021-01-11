import React, {Fragment} from "react";
import Counter from "../Counter/Counter";
import "./Redux.css";

export default function Redux() {
  return (
    <Fragment>
      <h1 className="page-title text-center">Redux</h1>
      <br /> <br /> <br />
      <div className="floatRight"><Counter /></div>

    </Fragment>
  )
}