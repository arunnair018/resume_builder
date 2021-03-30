import React from "react";
import LandingPage from "./modules/containers/LandingPage";
import FormPage from "./modules/containers/CreateForm";
import Resume from "./modules/containers/ViewResume";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/create" component={FormPage} />
          <Route exact path="/view" component={Resume} />
          <Route exact path="/edit" component={FormPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
