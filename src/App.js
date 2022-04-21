import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import "./styles/App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profile/:username" component={Profile} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );
}

export default App;
