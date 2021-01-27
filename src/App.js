import React from "react";
import { Switch, Route } from "react-router-dom";
import Lessons from "./pages/lessons/Lessons";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div className="font-roboto">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/lessons" component={Lessons}/>
      </Switch>
    </div>
  );
};

export default App;
