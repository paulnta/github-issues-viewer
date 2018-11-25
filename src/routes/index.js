import React from 'react';
import { Switch, Route } from 'react-router-dom';

import IssuePage from './IssuePage';
import SearchPage from './SearchPage';
import RepoPage from './RepoPage';
import NotFoundPage from './NotFoundPage';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SearchPage} />
    <Route path="/search" component={SearchPage} />
    <Route path="/:owner/:name" exact component={RepoPage} />
    <Route path="/:owner/:name/issues/:number" exact component={IssuePage} />
    <Route component={NotFoundPage} />
  </Switch>
);

Routes.propTypes = {};

export default Routes;
