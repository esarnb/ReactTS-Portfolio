import React, {Fragment} from "react"
import { useSelector } from "react-redux";

import Counter from "../../components/Counter";
import "./Home.css";

function Home() {
  const loggedIn = useSelector(state => state.isLogged);

  return (
    <Fragment>
      <h1 className="page-title text-center">{loggedIn ? "Welcome User" : "Home"}</h1>
      <br />
      <div className="bottom-counter"><Counter /></div>

    </Fragment>
  )
}
export default Home