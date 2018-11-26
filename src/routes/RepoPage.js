import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  }
}
`;

const styles = theme => ({
  content: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  filters: {
    marginBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
  }
});

class RepoPage extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string),
    history: PropTypes.object,
    match: PropTypes.object,
    location: PropTypes.object,
  }

  handleChangeState = (e, value) => {
    const { history } = this.props;
    history.replace({ search: `?state=${value}` });
  }

  render() {
    const { classes, match, location } = this.props;
    const { owner, name } = match.params;
    const { state = IssueState.OPEN } = queryString.parse(location.search);

    return (
      <>
        <Query
          query={REPO_INFO_QUERY}
          variables={{ owner, name }}
        >
          {({ data }) => (
            <Header>
              <RepoHeader repository={data.repository} />
            </Header>
          )}
        </Query>
        <Content className={classes.content}>
          <IssueListFilter
            className={classes.filters}
            state={state}
            onChange={this.handleChangeState}
            name={name}
            owner={owner}
          />
          <IssueList
            owner={owner}
            name={name}
            state={state}
          />
        </Content>
      </>
    );
  }
}

export default withStyles(styles)(RepoPage);
