import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { SheetContextConsumer } from './Sheet';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    marginRight: theme.spacing.unit * 2,
  }
});

const Row = ({ classes, children, label }) => (
  <SheetContextConsumer>
    {({ labelWidth }) => {
      const labelElement = label ? (
        <Typography
          variant="caption"
          style={{ width: labelWidth }}
          className={classes.label}
          color="textSecondary"
        >
          {label}
        </Typography>
      ) : null;

      return (
        <div className={classes.root}>
          {labelElement}
          {children}
        </div>
      );
    }}
  </SheetContextConsumer>
);

Row.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
  label: PropTypes.string,
};

export default withStyles(styles)(Row);
