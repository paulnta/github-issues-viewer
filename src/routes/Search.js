
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import Content from '../components/LayoutContent';
import RepoListItem from '../components/RepoListItem';

const styles = theme => ({
  root: {},
  title: {
    ...theme.mixins.gutters(),
  }
});

const SEARCH_REPO = gql`
  query SearchRepo($query: String!) {
    search(query: $query, type: REPOSITORY, first: 10) {
      edges {
        node {
          ...on Repository {
            id
            name
            nameWithOwner
            owner { login }
            description
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`;

const DEFAULT_QUERY = 'stars:>1000';

const LoadingState = () => (
  <>
    <RepoListItem loading />
    <RepoListItem loading />
    <RepoListItem loading />
    <RepoListItem loading />
  </>
);

const Search = ({ classes, children, location }) => {
  const params = queryString.parse(location.search);
  return (
    <>
      <Content className={classes.root}>
        <Typography className={classes.title} variant="title" gutterBottom>
          Search Repositories
        </Typography>
        <Query query={SEARCH_REPO} variables={{ query: params.q || DEFAULT_QUERY }}>
          {({ data, loading, error }) => {
            if (loading) return <LoadingState />;
            if (error) return 'error...';
            const { edges } = data.search;
            return (
              <List>
                {
                  edges.map(({ node: repo }) => {
                    return (
                      <Link
                        key={repo.id}
                        to={`/${repo.owner.login}/${repo.name}`}
                      >
                        <RepoListItem
                          title={repo.nameWithOwner}
                          description={repo.description}
                          starCount={repo.stargazers.totalCount}
                        />
                      </Link>
                    );
                  })
                }
              </List>
            );
          }}
        </Query>
      </Content>
    </>
  );
};

Search.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
};

export default withStyles(styles)(Search);
