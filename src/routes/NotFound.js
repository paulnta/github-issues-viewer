import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Content from '../components/LayoutContent';

const styles = {
  content: {
    paddingTop: 120,
    textAlign: 'center',
  }
};

const NotFound = ({ classes }) => (
  <Content className={classes.content}>
    <Typography variant="h3">404 Not found</Typography>
  </Content>
);

export default withStyles(styles)(NotFound);
