import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Layout  } from 'antd';
import { useSelector } from "react-redux";

import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Github from "./pages/Github/Github";
import ThreeJS from "./pages/ThreeJS/ThreeJS";
import Config from "./pages/Config/Config";
import "./styles.css";
// const { Footer } = Layout;

function App() {
  const loggedIn = useSelector(state => state.isLogged);

  return (
    <Layout id="main-page-layout">
      
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/github" component={Github}/>
            <Route exact path="/threejs" component={ThreeJS}/>
            {loggedIn ? <Route exact path="/config" component={Config}/> : <div id="plsLogin" className="">Please Log In!</div>}
            <Route path="/" component={NotFound}/>
          </Switch>
          {/* <Footer id="footer">esarnb</Footer> */}
        </Router>

    </Layout>
        
  )
}
export default App