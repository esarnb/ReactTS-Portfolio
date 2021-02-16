import React, {Fragment} from "react";
import Counter from "../../components/Counter/Counter";
import Profile from "../../components/Profile/Profile";
import "./Config.css";

export default function Config() {
  return (
    <Fragment>
      <h1 className="page-title text-center">Config</h1>
      <p className="text-center"> React Redux State management </p>
      
      <br /> <br /> <br />

      <div className="div-center">
        <ul id="todoList"> Todo: 
          <li>Component to login</li>
          <li>Submit information to verify account</li>
          <li>Pull information to redux state to propogate config</li>
          <li>Use states to style theme, default being light gray theme</li>
          <br />
          <li>State Theme Selector</li>
          <li>State Font Dropdown</li>
          <li>State Username, Profile Pic</li>
          <li>State Notepad</li>
          {/* <li>State </li> */}
        </ul>
      </div>

      <br /> <br /> <br />

      <div className="div-center text-center">
        <section>
          <Profile />
          [Avatar, Username], [email, password]
        </section>

        <br /> <br /> <br />

        <section>
          [Theme & Font selector]
        </section>
      </div>

      <br /> <br /> <br />


      <div className="div-center text-center">
        <p> Counter is synced throughout the website.</p>
        <Counter />
      </div>

    </Fragment>
  )
}