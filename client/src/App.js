import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NotFound from "./Components/NotFound";
import Home from "./Pages/Home/index.js";
import "./App.css";

class App extends React.Component {
  state = {
    test: 1,
    user: {
      name: "Person",
      email: "sr@gmail.com",
      avatar: "some.png"
    }
  }

  render() {
    return (  
      <Router>
      <React.Fragment>
        <Switch> 
          <Route exact path="/" render={props => (<Home {...props} profile={this.state.user}/>)} />
          {/* <Route exact path="/" render={props => (<Home {...props} test1={this.state.test}/>)} /> */}
          {/* <Route exact path="/" component={<Home test={this.state.test}/> */}
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </Router>
    )
  }
}

export default App;
