import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NotFound from "./Components/NotFound";
import Home from "./Pages/Home/index.js";
import "./App.css";

class App extends React.Component {
  state = {
    test: 1,
    profile: null
  }

  setProfile = (user) => {
    this.setState({profile: user})
    console.log(`Ran setup on ${JSON.stringify(user)}`);
    
  }

  componentWillMount() {
    //Check if there is a cookie stored for user login
    
    // if so, auto-retrieve information to put into profile object

    // if not, keep profile to empty object

  }
  
  render() {
    return (  
      <Router>
      <React.Fragment>
        <Switch> 
          <Route exact path="/" render={props => (<Home {...props} profile={this.state.profile} setProfileRoot={this.setProfile}/>)} />
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
