import React from "react";
import { Switch, Route } from "react-router-dom";
import Lessons from "./pages/Lessons";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="font-roboto">
     

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route path="/lessons">
          <Lessons />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
