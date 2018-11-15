import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    padding: '0 56px',
    margin: '54px auto 24px auto',
    width: '100%',
    maxWidth: 900,
  },
  title: {
    marginBottom: 24,
  },
  paper: {
    background: theme.palette.background.default,
  },
});

const SheetContext = React.createContext({ labelWidth: 150 });

const Sheet = ({ classes, children, title, labelWidth }) => (
  <div className={classes.root}>
    <Typography
      variant="subtitle2"
      className={classes.title}
      color="textSecondary"
    >
      {title}
    </Typography>
    <div className={classes.paper}>
      <SheetContext.Provider value={{ labelWidth }}>
        {children}
      </SheetContext.Provider>
    </div>
  </div>
);

Sheet.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
  title: PropTypes.string,
  labelWidth: PropTypes.number,
};

export const SheetContextConsumer = SheetContext.Consumer;
export default withStyles(styles)(Sheet);
