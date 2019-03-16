import React from "react";
import { Route, Switch } from "react-router";

import Home from "./Home";
import MyCollections from "./MyCollections";
import MovieDetails from "./components/MovieDetails";
import Error from "./components/Error";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/my-collections" component={MyCollections} />
            <Route path="/movie/:id" component={MovieDetails} />
            <Route component={Error} />
        </Switch>
        );
    };
    
    export default Routes;

