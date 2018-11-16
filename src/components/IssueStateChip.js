import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ChipBase from '@material-ui/core/Chip';

import Info from '../svgIcons/Info';

const styles = theme => ({
  root: {
    background: '#01D48A',
    color: '#fff',
    fontWeight: 500,
  },
  icon: {
    height: 16,
    width: 16,
    marginLeft: theme.spacing.unit,
    color: theme.palette.common.white,
  },
});

const Chip = ({ classes, className, children }) => (
  <ChipBase
    className={cx(classes.root, className)}
    icon={<Info color="inherit" className={classes.icon} />}
    label="Open"
  />
);

Chip.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  children: PropTypes.node,
};

export default withStyles(styles)(Chip);
