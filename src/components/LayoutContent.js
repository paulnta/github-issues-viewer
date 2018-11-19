import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import cx from 'classnames';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto',
    padding: 16,
  },
});

const LayoutContent = ({ classes, className, children }) => (
  <div className={cx(classes.root, className)}>
    {children}
  </div>
);

LayoutContent.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  children: PropTypes.node,
};

export default withStyles(styles)(LayoutContent);
