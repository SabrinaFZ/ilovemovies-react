import React from "react";
import { Route, Switch } from "react-router";

import Home from "./Home";
import MyCollections from "./MyCollections";
import MovieDetails from "./components/MovieDetails";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/my-collections" component={MyCollections} />
            <Route path="/movie/:id" component={MovieDetails} />
        </Switch>
        );
    };
    
    export default Routes;

