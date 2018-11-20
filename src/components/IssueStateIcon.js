import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import { IssueState } from '../constants';
import Info from '../svgIcons/Info';

const styles = theme => ({
  icon: {
    height: 18,
    width: 18,
    color: '#01D48A',
    '&.closed': {
      color: theme.palette.error.main,
    },
  },
});

const IssueStateIcon = ({ classes, className, state }) => {
  const closed = state === IssueState.CLOSED;
  return (
    <Info className={cx(classes.icon, className, { closed })} />
  );
};

IssueStateIcon.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  state: PropTypes.oneOf([IssueState.OPEN, IssueState.CLOSED]),
};

export default withStyles(styles)(IssueStateIcon);
