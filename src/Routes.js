import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Test from "./containers/Test";
import NotFound from "./containers/404";

export default () =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/test" exact component={Test} />
        <Route component={NotFound} />
    </Switch>;