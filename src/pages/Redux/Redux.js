import React, {Fragment} from "react";
import Counter from "../../components/Counter/Counter";
import "./Redux.css";

export default function Redux() {
  return (
    <Fragment>
      <h1 className="page-title text-center">Redux</h1>
      <p className="text-center"> React Redux State management 
      <br /> Counter is synced throughout the website.</p>
      
      <br /> <br /> <br />
      <div className="div-center"><Counter /></div>

    </Fragment>
  )
}