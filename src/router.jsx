import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/cadastro/:number/:name/:month/:year/:cvc'>
          <App />
        </Route>
        <Route path='/'>
          <App />
        </Route>
      </Switch>
    </Router>
  );
}
