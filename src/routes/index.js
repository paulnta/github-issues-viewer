import React from 'react';
import { Switch, Route } from 'react-router-dom';

import IssuePage from './IssuePage';
import SearchPage from './SearchPage';
import IssuesPage from './IssuesPage';
import NotFoundPage from './NotFoundPage';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SearchPage} />
    <Route path="/search" component={SearchPage} />
    <Route path="/:owner/:name" exact component={IssuesPage} />
    <Route path="/:owner/:name/issues/:number" exact component={IssuePage} />
    <Route component={NotFoundPage} />
  </Switch>
);

Routes.propTypes = {};

export default Routes;
