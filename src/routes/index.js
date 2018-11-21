import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Issue from './Issue';
import Search from './Search';
import Repo from './Repo';
import NotFound from './NotFound';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Search} />
    <Route path="/search" component={Search} />
    <Route path="/:owner/:name" exact component={Repo} />
    <Route path="/:owner/:name/issues/:number" exact component={Issue} />
    <Route component={NotFound} />
  </Switch>
);

Routes.propTypes = {};

export default Routes;
