import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { withSkeletonProvider } from './Skeleton';

const ISSUES_COUNT_QUERY = gql`
query IssuesCount($owner: String!, $name: String!) {
  repository(owner: $owner, name: $name) {
    openedCount: issues(states: [OPEN]) {
      totalCount
    }
    closedCount: issues(states: [CLOSED]) {
      totalCount
    }
  }
}
`;

const IssueListFilter = ({ classes, state, onChange, name, owner, ...otherProps }) => {
  return (
    <Query query={ISSUES_COUNT_QUERY} variables={{ name, owner }}>
      {({ data: { repository = {} } }) => {
        const { openedCount = {}, closedCount = {} } = repository;

        return (
          <Tabs
            value={state}
            onChange={onChange}
            indicatorColor="primary"
            {...otherProps}
          >
            <Tab
              value="OPEN"
              label={openedCount.totalCount ? `${openedCount.totalCount} OPEN` : 'OPEN'}
            />
            <Tab
              value="CLOSED"
              label={closedCount.totalCount ? `${closedCount.totalCount} CLOSED` : 'CLOSED'}
            />
          </Tabs>
        );
      }}
    </Query>
  );
};

IssueListFilter.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  state: PropTypes.string,
  loading: PropTypes.bool,
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

export default withSkeletonProvider()(IssueListFilter);
