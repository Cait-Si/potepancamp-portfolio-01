import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Home } from "./containers/Home";
import { Index } from "./containers/Index";
import { Create } from "./containers/Create";
import { Edit } from "./containers/Edit";
import { Header } from "./containers/Header";
import { getCurrentUser } from "./apis/auth";
import { SignIn } from "./containers/SignIn";
import { SignUp } from "./containers/SignUp";

export const AuthContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [IsSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser();

      if (res?.data.isLogin === true) {
        setIsSignedIn(true);
        setCurrentUser(res?.data.data);
        console.log(res)
      } else {
        console.log("not current user");
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  useEffect(() => {
    handleGetCurrentUser();
  },[setCurrentUser]);

  const Private = ({children}) => {
    if (!loading) {
      if (IsSignedIn) {
        return children
      } else {
        return <Redirect to="/signin" />;
      }
    } else {
      return <></>;
    };
  };

  return(
    <AuthContext.Provider
      value={{
        loading,
        IsSignedIn,
        currentUser,
        setLoading,
        setIsSignedIn,
        setCurrentUser,
      }}
    >
    <Router>
      <Header />
      <Switch>
        <Route exact path="/habitlog">
          <Home />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Private>
        <Route exact path="/habitlog/index">
          <Index />
        </Route>
        <Route exact path="/habitlog/habit/create">
          <Create />
        </Route>
        <Route exact path="/habitlog/:habitId/edit"
          render={({match}) =>
            <Edit match={match} />
          }
        />
        </Private>
      </Switch>
    </Router>
    </AuthContext.Provider>
  );
};

export default App;
