import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NotFound from "./Components/NotFound";
import Home from "./Pages/Home/index.js";
import "./App.css";

function App() {
  return (
    // {/* When a user visits the page, this will display the first ReactJS Component */}
    <Router>
      <React.Fragment>
        {/* Depending on the webpage url, pick a page component to display */}
        <Switch> 
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
