import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Lessons from "./pages/lessons/Lessons";
import Home from "./pages/home/Home";
import useFetch from "./hooks/useFetch";
import Sidebar from "./pages/lessons/Sidebar";

const App = () => {
  const [hideSidebar, setHideSidebar] = useState(true);
  const { data, isLoading, error } = useFetch("http://localhost:8000/lessons");
  return (
    <div className="font-roboto">
      <Sidebar
        lessons={data}
        isLoading={isLoading}
        error={error}
        hidden={hideSidebar}
      />

      <Switch>
        <Route exact path="/">
          <Home setHideSidebar={setHideSidebar} />
          
        </Route>
        <Route path="/lessons">
          <Lessons setHideSidebar={setHideSidebar} />
          
        </Route>
      </Switch>
    </div>
  );
};

export default App;
