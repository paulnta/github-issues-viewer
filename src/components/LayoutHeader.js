import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Content from './LayoutContent';

const styles = theme => ({
  root: {
    background: theme.palette.background.contrast,
    color: theme.palette.getContrastText(
      theme.palette.background.contrast,
    ),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit * 2,
    }
  },
  content: {
    padding: `${theme.spacing.unit * 3}px`,
    paddingTop: theme.spacing.unit * 4,
  }
});

const LayoutHeader = ({ classes, children }) => (
  <div className={classes.root}>
    <Content className={classes.content}>
      {children}
    </Content>
  </div>
);

LayoutHeader.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
};

export default withStyles(styles)(LayoutHeader);
