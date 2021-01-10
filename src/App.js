import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Layout  } from 'antd';
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar";
import "./styles.css";
// const { Footer } = Layout;

function App() {
  return (
    <Layout id="main-page-layout">
      
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/about" component={About}/>
            <Route path="/" component={NotFound}/>
          </Switch>
          {/* <Footer id="footer">esarnb</Footer> */}
        </Router>

    </Layout>
        
  )
}
export default App