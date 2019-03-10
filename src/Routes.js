import React from "react";
import { Route, Switch } from "react-router";

import Home from "./Home";
import MyCollections from "./MyCollections";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/my-collections" component={MyCollections} />
        </Switch>
        );
    };
    
    export default Routes;
    