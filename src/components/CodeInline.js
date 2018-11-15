import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    background: theme.palette.background.contrast,
    fontFamily: "'Roboto Mono', monospace;",
    padding: '1px 2px',
    fontSize: 13,
    borderRadius: theme.shape.borderRadius,
  },
});

const CodeInline = ({ classes, children }) => (
  <code className={classes.root}>
    {children}
  </code>
);

CodeInline.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
};

export default withStyles(styles)(CodeInline);
