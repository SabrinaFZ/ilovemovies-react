import React from 'react';
import { Route, Switch } from 'react-router';

import Home from '../views/Home';
import MyCollections from '../views/MyCollections';
import MovieDetails from '../views/MovieDetails';
import Error from '../views/Error';

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
