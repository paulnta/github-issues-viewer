
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

import Content from '../components/LayoutContent';
import RepoListItem from '../components/RepoListItem';
import Message from '../components/Message';
import MessageError from '../components/MessageError';

const styles = theme => ({
  content: {
    paddingLeft: 0,
    paddingRight: 0,
  },
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

const Search = ({ classes, children, location }) => {
  const { q } = queryString.parse(location.search);
  return (
    <>
      <Content className={classes.content}>
        <Typography className={classes.title} variant="h6" gutterBottom>
          Search Repositories
        </Typography>
        <Query query={SEARCH_REPO} variables={{ query: q || DEFAULT_QUERY }}>
          {({ data, loading, error }) => {
            if (loading) {
              // Loading state
              return (
                <List>
                  <RepoListItem loading />
                  <RepoListItem loading />
                  <RepoListItem loading />
                  <RepoListItem loading />
                </List>
              );
            }
            else if (error) {
              // Error state
              return <MessageError />;
            }
            else if (!data.search.edges.length) {
              // Empty state
              return (
                <Message
                  title="Oops"
                  description={`We couldn't find results for "${q}"`}
                />
              );
            }

            return (
              <List>
                {data.search.edges.map(({ node: repo }) => {
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
                })}
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
