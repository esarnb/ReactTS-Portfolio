import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NotFound from "./Components/NotFound/NotFound.js";
import Home from "./Pages/Home/Home.js";

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
