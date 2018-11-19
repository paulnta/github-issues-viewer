
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

import Header from '../components/LayoutHeader';
import Content from '../components/LayoutContent';

const styles = theme => ({
  root: {},
});

const SEARCH_REPO = gql`
  query SearchRepo($query: String!) {
    search(query: $query, type: REPOSITORY, first: 10) {
      repositoryCount
      edges {
        node {
          ...on Repository {
            id
            name
            owner { login }
            description
          }
        }
      }
    }
  }
`;

const Search = ({ classes, children, location }) => {
  const params = queryString.parse(location.search);
  return (
    <Query query={SEARCH_REPO} variables={{ query: params.q || '' }}>
      {({ data, loading, error }) => {
        if (loading) return 'Loading...';
        if (error) return 'error...';
        const { edges, repositoryCount } = data.search;
        return (
          <Content className={classes.root}>
            <h1>{repositoryCount} results</h1>
            {edges.map(({ node: repo }) => {
              return (
                <Link
                  key={repo.id}
                  to={`/${repo.owner.login}/${repo.name}`}
                >
                  <div >
                    <p>{repo.owner.login}/{repo.name}</p>
                    <p>{repo.description}</p>
                  </div>
                </Link>
              );
            })}
          </Content>
        );
      }}
    </Query>
  );
};

Search.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
};

export default withStyles(styles)(Search);
