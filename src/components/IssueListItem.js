import React from "react";
import PropTypes from "prop-types";
import compose from 'recompose/compose';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import CommentIcon from '@material-ui/icons/ModeCommentOutlined';

import { IssueState } from "../constants";
import TimeAgo from "./TimeAgo";
import IssueStateIcon from "./IssueStateIcon";
import { Span, withSkeletonProvider, withSkeleton, placeholder } from "./Skeleton";

const styles = theme => ({
  root: {
    padding: '8px 64px 8px 34px',
    position: 'relative',
    display: 'block',
    textAlign: 'left',
    borderRadius: 2,
    '&:hover': {
      background: theme.palette.action.hover,
    },
    '&.loading': {
      pointerEvents: 'none',
    },
  },
  issueState: {
    position: 'absolute',
    top: 15,
    left: 10,
  },
  issueComments: {
    position: 'absolute',
    top: 12,
    right: 16,
    display: 'flex',
    alignItems: 'center',
  },
  commentIcon: {
    height: 18,
    width: 18,
    color: theme.palette.text.secondary,
    marginRight: theme.spacing.unit / 2,
  },
  primaryText: {
    fontWeight: 500,
  }
});

const Comment = withSkeleton(CommentIcon);

const IssueListItem = ({ classes, title, number, createdAt, state, author, commentCount, loading, tabIndex }) => (
  <ButtonBase className={cx(classes.root, { loading })} component="div" tabIndex={tabIndex}>
    <Typography variant="subtitle1" noWrap className={classes.primaryText}>
      <Span>{title}</Span>
    </Typography>
    <Typography variant="caption" noWrap color="textSecondary">
      <Span>#{number} opened <TimeAgo date={createdAt} /> by {author}</Span>
    </Typography>
    <IssueStateIcon
      className={cx(classes.issueState, { 'skeleton-pending': loading })}
      state={state}
    />
    {(loading || commentCount > 0) && (
      <div className={classes.issueComments}>
        <Comment className={classes.commentIcon} />
        <Typography variant="caption">{commentCount}</Typography>
      </div>
    )}
  </ButtonBase>
);

IssueListItem.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
  state: PropTypes.oneOf([IssueState.OPEN, IssueState.CLOSED]),
  author: PropTypes.string,
  createdAt: PropTypes.string,
  commentCount: PropTypes.number,
  tabIndex: PropTypes.number,
};

export default compose(
  withSkeletonProvider({
    title: placeholder(50),
    author: placeholder(10),
    state: null,
  }),
  withStyles(styles),
)(IssueListItem);
