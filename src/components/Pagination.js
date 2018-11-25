import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

const styles = theme => ({
  root: {
    justifyContent: 'center',
  },
});

const Pagination = ({ classes, children, onLoadMore, hasNextPage }) => (
  <Toolbar className={classes.root}>
    <Button
      disabled={!hasNextPage}
      onClick={onLoadMore}
      color="primary"
    >
      Load more
    </Button>
  </Toolbar>
);

Pagination.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onLoadMore: PropTypes.func,
  hasNextPage: PropTypes.bool,
};

export default withStyles(styles)(Pagination);
