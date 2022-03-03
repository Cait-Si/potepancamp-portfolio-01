import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Home } from "./containers/Home";
import { Index } from "./containers/Index";
import { Create } from "./containers/Create";
import { Edit } from "./containers/Edit";
import { Header } from "./containers/Header";

function App() {
  return(
    <Router>
      <Header />
      <Switch>
        <Route
          exact
          path="/habitlog">
          <Home />
        </Route>
        <Route
          exact
          path="/habitlog/index">
          <Index />
        </Route>
        <Route
          exact
          path="/habitlog/habit/create">
          <Create />
        </Route>
        <Route
          exact
          path="/habitlog/:habitId/edit"
          render={({match}) =>
            <Edit match={match} />
          }
        />
      </Switch>
    </Router>
  );
};

export default App;
