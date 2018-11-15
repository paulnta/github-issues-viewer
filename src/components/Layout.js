import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ThemeToggle from './ThemeToggle';
import InputSearch from './InputSearch';

const styles = theme => {
  const appBarBackground = theme.palette.background.contrast;

  return {
    appBar: {
      background: appBarBackground,
    },
    header: {
      background: appBarBackground,
      color: theme.palette.getContrastText(appBarBackground)
    },
    centered: {
      width: '100%',
      maxWidth: '900px',
      margin: '0 auto',
    },
    toolbar: {
      position: 'relative',
      minHeight: 60,
    },
    toolbarContent: {
      display: 'flex',
      alignItems: 'center',
    },
    main: {
      padding: '24px 16px 24px',
    },
    logo: {
      height: 32,
      width: 'auto',
      position: 'absolute',
      top: '50%',
      left: 16,
      transform: 'translateY(-50%)',
    },
    searchInput: {
      transition: theme.transitions.create('width'),
      width: 130,
      '&:focus': {
        width: 200,
      }
    },
    grow: {
      flex: 1,
    }
  };
};

const Layout = ({ classes, children }) => (
  <div>
    <AppBar elevation={0} className={classes.appBar} position="static">
      <Toolbar className={classes.toolbar}>
        <div className={cx(classes.toolbarContent, classes.centered)}>
          <Link to="/">
            <img src="/logo.svg" alt="logo" className={classes.logo} />
          </Link>
          <div className={classes.grow} />
          <InputSearch
            fullWidth={false}
            placeholder="Search for repo"
            inputProps={{
              className: classes.searchInput,
            }}
          />
          <ThemeToggle />
        </div>
      </Toolbar>
    </AppBar>
    {children}
  </div>
);

Layout.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
};

export default withStyles(styles)(Layout);
