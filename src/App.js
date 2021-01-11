import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Layout  } from 'antd';
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import "./styles.css";
// const { Footer } = Layout;

function App() {
  return (
    <Layout id="main-page-layout">
      
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/" component={NotFound}/>
          </Switch>
          {/* <Footer id="footer">esarnb</Footer> */}
        </Router>

    </Layout>
        
  )
}
export default App