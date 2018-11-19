import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

import IssueListItem from './IssueListItem';

const ISSUES_QUERY = gql`
query RepoInfos($owner: String!, $name: String!) {
  repository(owner: $owner, name: $name) {
    issues(first: 30, orderBy: { field: UPDATED_AT, direction: DESC }) {
      edges {
        node {
          id
          number
          title
          author { login }
          createdAt
          comments { totalCount }
        }
      }
    }
  }
}
`;

const LoadingState = () => (
  <>
    <IssueListItem loading />
    <IssueListItem loading />
    <IssueListItem loading />
    <IssueListItem loading />
  </>
);

class IssueList extends Component {
  static propTypes = {
    owner: PropTypes.string,
    name: PropTypes.string,
  };

  render() {
    const { owner, name } = this.props;
    return (
      <Query
        query={ISSUES_QUERY}
        skip={!owner || !name}
        variables={{ owner, name }}
      >
        {({ loading, error, data }) => {
          console.log({ error, data });
          if (loading) return <LoadingState />;
          else if (error) return 'Error...';
          else if (!data) return null;

          const { repository } = data;
          return (
            <div>
              {repository.issues.edges.map(({ node: issue }) => {
                return (
                  <Link key={issue.id} to={`/${owner}/${name}/issues/${issue.number}`}>
                    <IssueListItem
                      number={issue.number}
                      title={issue.title}
                      author={issue.author.login}
                      createdAt={issue.createdAt}
                      commentCount={issue.comments.totalCount}
                      tabIndex={-1}
                    />
                  </Link>
                );
              })}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default IssueList;
