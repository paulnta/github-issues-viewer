import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MuiAvatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    borderRadius: 2,
    height: 46,
    width: 46,
  },
});

const Avatar = ({ classes, className, src, ...props }) => (
  <MuiAvatar
    className={cx(classes.root, className)}
    src={src}
    {...props}
  />
);

Avatar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  src: PropTypes.string,
};

export default withStyles(styles)(Avatar);
