import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NotFound from "./Components/NotFound";
import Home from "./Pages/Home/index.js";
import "./App.css";

class App extends React.Component {
  state = {
    test: 1
  }

  render() {
    return (  
      <Router>
      <React.Fragment>
        <Switch> 
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </Router>
    )
  }
}

export default App;
