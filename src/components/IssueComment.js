import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import compose from 'recompose/compose';

import Markdown from './Markdown';
import TimeAgo from './TimeAgo';
import { withSkeletonProvider, Avatar, Span } from './Skeleton';


const styles = theme => {
  const spacing = theme.spacing.unit;
  return {
    root: {
      position: 'relative',
      paddingLeft: 62,
      marginBottom: spacing * 3,
    },
    avatar: {
      position: 'absolute',
      top: 0,
      left: 0,
      marginRight: spacing * 2,
    },
    content: {
      padding: `${spacing}px ${spacing * 3}px ${spacing * 3}px`,
    },
    toolbar: {
      minHeight: 46,
    },
    author: {
      marginRight: theme.spacing.unit / 2,
    }
  };
};

const IssueComment = ({ classes, body, author, createdAt }) => {
  const { avatarUrl, login } = author || {};

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar} src={avatarUrl} />
      <Paper elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="subtitle2" className={classes.author}>
            <Span>{login}</Span>
          </Typography>
          {createdAt && (
            <Typography variant="body2" color="textSecondary">
              commented <TimeAgo date={createdAt} />
            </Typography>
          )}
        </Toolbar>
        <div className={classes.content}>
          <Markdown source={body} />
        </div>
      </Paper>
    </div>
  );
};

IssueComment.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  createdAt: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.shape({
    avatarUrl: PropTypes.string,
    login: PropTypes.string,
  }),
};

export default compose(
  withSkeletonProvider({
    author: {
      login: 'xxx '.repeat(5)
    },
    body: 'xxx '.repeat(130),
  }),
  withStyles(styles),
)(IssueComment);
