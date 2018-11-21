import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import IssueList from '../components/IssueList';
import Header from '../components/LayoutHeader';
import Content from '../components/LayoutContent';

const REPO_INFO_QUERY = gql`
query Repo($owner: String!, $name: String!) {
  repository(owner: $owner, name: $name) {
    description
  }
}
`;

class Repo extends Component {
  render() {
    const { match } = this.props;
    const { owner, name } = match.params;
    return (
      <>
        <Query
          query={REPO_INFO_QUERY}
          variables={{ owner, name }}
        >
          {({ data: { repository } }) => (
            <Header>
              <Typography variant="h6">{owner} / {name} </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {repository ? repository.description : null}
              </Typography>
            </Header>
          )}
        </Query>
        <Content>
          <IssueList owner={owner} name={name} />
        </Content>
      </>
    );
  }
}

export default Repo;
