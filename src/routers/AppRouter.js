import React from "react";
import { Router } from "@reach/router";
import SubHeader from "../components/SubHeader";
import Header from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";

function AppRouter() {
  return (
    <React.Fragment>
      <SubHeader />
      <Header />
      <Router path="/">
        <Home path="/" />
        <Login path="/login" />
      </Router>
    </React.Fragment>
  );
}

export default AppRouter;
