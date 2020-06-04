import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ProfilePage from "./pages/Profile";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ProfilePage} />
      <Route path="/me" component={ProfilePage} />
      <Route path="*" component={ProfilePage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
