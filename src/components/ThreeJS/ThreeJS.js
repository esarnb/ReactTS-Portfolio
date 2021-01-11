import React, {Fragment} from "react";
import Counter from "../Counter";
import "./ThreeJS.css";

export default function ThreeJS() {
  return (
    <Fragment>
      <h1 className="page-title text-center">ThreeJS</h1>
      <br /> <br /> <br />
      <div className="floatRight"><Counter /></div>

    </Fragment>
  )
}