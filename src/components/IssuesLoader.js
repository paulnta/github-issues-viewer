import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ISSUES_QUERY = gql`
  query IssuesList($owner: String!, $name: String!, $state: [IssueState!], $cursor: String, $pageSize: Int) {
    repository(owner: $owner, name: $name) {
      issues(
          first: $pageSize,
          states: $state,
          orderBy: { field: UPDATED_AT, direction: DESC },
          after: $cursor
        ) {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          cursor
          node {
            id
            number
            title
            author { login }
            state
            createdAt
            comments { totalCount }
          }
        }
      }
    }
  }
`;

const IssuesLoader = ({ children, owner, name, state, pageSize }) => {
  const variables = {
    owner,
    name,
    state: [state],
    pageSize,
  };

  return (
    <Query
      query={ISSUES_QUERY}
      variables={variables}
    >
      {({ loading, data, error, fetchMore }) => {
        const { repository = {} } = data;
        const { pageInfo = {}, edges = [] } = repository.issues || {};

        return children({
          loading,
          error,
          issues: edges.map(edge => edge.node),
          hasNextPage: pageInfo.hasNextPage,
          onLoadMore: () => fetchMore({
            query: ISSUES_QUERY,
            variables: {
              ...variables,
              cursor: repository.issues.pageInfo.endCursor,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) return prev;
              return {
                repository: {
                  ...prev.repository,
                  issues: {
                    ...prev.repository.issues,
                    // update pagination info
                    pageInfo: fetchMoreResult.repository.issues.pageInfo,
                    // append new issues
                    edges: [
                      ...prev.repository.issues.edges,
                      ...fetchMoreResult.repository.issues.edges,
                    ]
                  }
                }
              };
            },
          }),
        });
      }}
    </Query>
  );
};

IssuesLoader.propTypes = {
  owner: PropTypes.string,
  name: PropTypes.string,
  state: PropTypes.string,
  pageSize: PropTypes.number,
  children: PropTypes.func.isRequired,
};

IssuesLoader.defaultProps = {
  pageSize: 10,
};

export default IssuesLoader;
