import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    textAlign: 'center',
    padding: `${theme.spacing.unit * 4}px 0`,
  },
  content: {
    margin: '0 auto',
    maxWidth: 300,
  },
  iconContainer: {
    marginBottom: theme.spacing.unit,
  },
});

const Message = ({ classes, className, title, description, icon, ...props }) => (
  <div className={cx(classes.root, className)} {...props}>
    <div className={classes.iconContainer}>
      {icon}
    </div>
    <div className={classes.content}>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="body2" color="textSecondary">{description}</Typography>
    </div>
  </div>
);

Message.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.node,
};

export default withStyles(styles)(Message);
