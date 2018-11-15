import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Content from './LayoutContent';

const styles = theme => ({
  root: {
    background: theme.palette.background.contrast,
    paddingTop: 24,
    paddingBottom: 32,
    color: theme.palette.getContrastText(
      theme.palette.background.contrast,
    )
  },
});

const LayoutHeader = ({ classes, children }) => (
  <div className={classes.root}>
    <Content>
      {children}
    </Content>
  </div>
);

LayoutHeader.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
};

export default withStyles(styles)(LayoutHeader);
