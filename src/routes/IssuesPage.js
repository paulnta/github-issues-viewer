import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Query } from 'react-apollo';
import queryString from 'query-string';
import gql from 'graphql-tag';

import IssueList from '../components/IssueList';
import Header from '../components/LayoutHeader';
import Content from '../components/LayoutContent';
import IssueListFilter from '../components/IssueListFilter';
import { IssueState } from '../constants';
import RepoHeader from '../components/RepoHeader';

const REPO_INFO_QUERY = gql`
query Repo($owner: String!, $name: String!) {
  repository(owner: $owner, name: $name) {
    name
    owner { login }
    description
    openedIssues: issues(states: OPEN ) {
      totalCount
    }
    closedIssues: issues(states: CLOSED) {
      totalCount
    }
  }
}
`;

const styles = {
  content: {
    paddingTop: 0,
  },
  filters: {
    marginBottom: 16,
  }
};

class Repo extends Component {

  handleChangeState = (e, value) => {
    const { history } = this.props;
    history.push({ search: `?state=${value}` });
  }

  render() {
    const { classes, match, location } = this.props;
    const { owner, name } = match.params;
    const { state = IssueState.OPEN } = queryString.parse(location.search);

    return (
      <Query
        query={REPO_INFO_QUERY}
        variables={{ owner, name }}
      >
        {({ data: { repository } }) => {
          const { openedIssues = {}, closedIssues = {} } = repository || {};
          return (
            <>
              <Header>
                <RepoHeader repository={repository} />
              </Header>
              <Content className={classes.content}>
                <IssueListFilter
                  className={classes.filters}
                  state={state}
                  openedCount={openedIssues.totalCount}
                  closedCount={closedIssues.totalCount}
                  onChange={this.handleChangeState}
                />
                <IssueList
                  owner={owner}
                  name={name}
                  state={state}
                />
              </Content>
            </>
          );
        }}
      </Query>
    );
  }
}

export default withStyles(styles)(Repo);
