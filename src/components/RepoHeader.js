import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { withSkeletonProvider, placeholder, Span } from './Skeleton';

const styles = theme => ({
  subtitle: {
    fontWeight: theme.typography.fontWeightRegular,
  }
});

const RepoHeader = ({ classes, children, repository }) => {
  const { name, owner, description } = repository;
  return (
    <div className={classes.root}>
      <Typography variant="h6">
        <Span>{owner.login} / {name}</Span>
      </Typography>
      <Typography variant="subtitle1" className={classes.subtitle} color="textSecondary">
        <Span>{description}</Span>
      </Typography>
    </div>
  );
};

RepoHeader.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
  repository: PropTypes.shape({
    owner: PropTypes.shape({
      login: PropTypes.string,
    }),
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

const isLoading = props => !props.repository;
export default compose(
  withSkeletonProvider({
    repository: {
      owner: {
        login: placeholder(15)
      },
      name: placeholder(15),
      description: placeholder(160),
    }
  }, isLoading),
  withStyles(styles),
)(RepoHeader);
