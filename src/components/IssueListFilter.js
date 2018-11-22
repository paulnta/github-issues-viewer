import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { withSkeletonProvider } from './Skeleton';

const styles = theme => ({
  root: {},
});

const IssueListFilter = ({ classes, state, onChange, openedCount, closedCount, ...props }) => {
  return (
    <Tabs
      value={state}
      onChange={onChange}
      indicatorColor="primary"
      {...props}
    >
      <Tab value="OPEN" label={openedCount ? `${openedCount} OPEN` : 'OPEN'} />
      <Tab value="CLOSED" label={closedCount ? `${closedCount} CLOSED` : 'CLOSED'} />
    </Tabs>
  );
};

IssueListFilter.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  state: PropTypes.string,
  openedCount: PropTypes.number,
  closedCount: PropTypes.number,
  loading: PropTypes.bool,
};

export default compose(
  withStyles(styles),
  withSkeletonProvider(),
)(IssueListFilter);
