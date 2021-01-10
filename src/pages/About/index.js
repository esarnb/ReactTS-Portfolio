import React, {Fragment} from "react";
import Counter from "../../components/Counter";
import "./About.css";

export default function About() {
  return (
    <Fragment>
      <h1 className="page-title text-center">About</h1>
      <br /> <br /> <br />
      <div className="floatRight"><Counter /></div>

    </Fragment>
  )
}