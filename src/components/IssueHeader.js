import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import cx from 'classnames';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import OpenIcon from '@material-ui/icons/OpenInNew';
import Tooltip from '@material-ui/core/Tooltip';
import { withSkeletonProvider, Span } from './Skeleton';

import TimeAgo from './TimeAgo';
import { IssueState } from '../constants';
import IssueStateChip from './IssueStateChip';


const styles = theme => ({
  root: {
    position: 'relative',
    paddingRight: 36,
  },
  headline: {
    marginBottom: theme.spacing.unit * 2,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.3rem',
    }
  },
  meta: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'inline',
    }
  },
  issueNumber: {
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit / 2,
  },
  statusChip: {
    marginRight: theme.spacing.unit,
  },
  openButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 32,
    width: 32,
  },
});

const IssueHeader = ({ classes, className, children, title, author, commentsCount, number, createdAt, state, url }) => {
  const timeAgo = createdAt && <TimeAgo date={createdAt} />;
  const issueNumber = number && <span className={classes.issueNumber}>#{number}</span>;
  const issueState = state && <IssueStateChip className={classes.statusChip} state={state} />;
  const meta = <span className={classes.meta}><strong>{author}</strong> opened this issue {timeAgo} ·</span>;

  return (
    <div className={cx(classes.root, className)}>
      <Typography className={classes.headline} variant="h5">
        <Span>{title} {issueNumber} </Span>
      </Typography>

      <Typography
        variant="body1"
        color="textSecondary"
        component="span"
        className={classes.subtitle}
      >
        {issueState}
        <Span>{meta} {commentsCount} comments</Span>
      </Typography>

      {url && (
        <Tooltip title="Open in github">
          <IconButton className={classes.openButton} href={url}>
            <OpenIcon color="action" />
          </IconButton>
        </Tooltip>
      )}
    </div>
  );
};

IssueHeader.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  number: PropTypes.number,
  createdAt: PropTypes.string,
  author: PropTypes.string,
  state: PropTypes.oneOf([IssueState.OPEN, IssueState.CLOSED]),
  commentsCount: PropTypes.number,
  url: PropTypes.string,
  loading: PropTypes.bool,
};

export default compose(
  withSkeletonProvider({
    title: 'xxx '.repeat(15),
    author: 'xxx '.repeat(3),
    number: null,
    url: null,
    state: null,
    createdAt: null,
  }),
  withStyles(styles),
)(IssueHeader);
