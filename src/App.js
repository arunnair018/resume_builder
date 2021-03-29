import React from "react";
import LandingPage from "./modules/containers/LandingPage";
import FormPage from "./modules/containers/CreateForm";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/create"
            component={() => <FormPage formProp={{ name: "Arun Nair" }} />}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
