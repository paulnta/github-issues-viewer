import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StarBorder from '@material-ui/icons/Star';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import { withSkeleton, withSkeletonProvider, Span, placeholder } from './Skeleton';

const styles = theme => ({
  root: {
    '&.loading': {
      pointerEvents: 'none',
    },
  },
  title: {
    fontWeight: 500,
  },
  starIcon: {
    marginRight: 4,
  },
  starCount: {
    lineHeight: '24px',
  }
});

const StarIcon = withSkeleton(StarBorder);

const formatStarCount = (value) => {
  if (!value) return null;
  return value > 999 ? Number((value / 1000).toFixed(1)) + 'k' : value;
};

const BaseListItem = ({ classes, className, title, description, starCount, loading }) => (
  <ListItem className={cx(classes.root, className, { loading })} button>
    <ListItemText
      disableTypography
      primary={
        <Typography className={classes.title} color="primary" variant="subtitle1" noWrap>
          <Span>{title}</Span>
        </Typography>
      }
      secondary={
        <Typography color="textSecondary">
          <Span>{description}</Span>
        </Typography>
      }
    />
    <ListItemIcon>
      <StarIcon className={classes.starIcon} />
      <Typography className={classes.starCount}>
        {formatStarCount(starCount)}
      </Typography>
    </ListItemIcon>
  </ListItem>
);

BaseListItem.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  loading: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  startCount: PropTypes.number,
};

export default compose(
  withSkeletonProvider({
    title: placeholder(14),
    description: placeholder(90),
  }),
  withStyles(styles),
)(BaseListItem);
