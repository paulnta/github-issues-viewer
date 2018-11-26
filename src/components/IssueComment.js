import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import compose from 'recompose/compose';

import Markdown from './Markdown';
import TimeAgo from './TimeAgo';
import { withSkeletonProvider, Avatar, Span } from './Skeleton';


const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit * 3,
    background: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
  },
  content: {
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing.unit * 2,
  },
  avatar: {
    marginRight: theme.spacing.unit * 2,
  },
  author: {
    marginRight: theme.spacing.unit / 2,
  },
});

const IssueComment = ({ classes, body, author, createdAt }) => {
  const { avatarUrl, login } = author || {};

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Avatar className={classes.avatar} src={avatarUrl} />
        <div>
          <Typography variant="subtitle2" className={classes.author}>
            <Span>{login}</Span>
          </Typography>

          <Typography variant="body2" color="textSecondary">
            <Span>commented <TimeAgo date={createdAt} /></Span>
          </Typography>
        </div>
      </div>

      <Markdown
        className={classes.content}
        source={body || '*No description provided*'}
      />
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
