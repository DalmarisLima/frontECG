import React, { Component } from "react";
import { Route } from "react-router-dom";
import Menu from "./components/menu";
import Report from "./pages/report";
import Home from "./pages/home";
import StudyMaterial from "./pages/studyMaterial";
import Ranking from "./pages/ranking";
import "./App.css";

const App = () => (
  <div>
    <Menu />
    <Route path="/" exact component={Home} />
    <Route path="/ranking" exact component={Ranking} />
    <Route path="/report" exact component={Report} />
    <Route path="/matstudy" exact component={StudyMaterial} />
  </div>
);

export default App;
