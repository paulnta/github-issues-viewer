import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import cx from 'classnames';
import compose from 'recompose/compose';
import { Link, withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import ThemeToggle from './ThemeToggle';
import InputSearch from './InputSearch';
import Logo from '../svgIcons/Logo';

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
      height: 28,
      width: 'auto',
      position: 'absolute',
      top: '50%',
      left: 16,
      transform: 'translateY(-50%)',
      color: theme.palette.text.primary,
    },
    searchInput: {
      transition: theme.transitions.create('width'),
      width: 110,
      '&:focus': {
        width: 180,
      }
    },
    grow: {
      flex: 1,
    }
  };
};


class Layout extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string),
    children: PropTypes.node,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  onSubmitSearch = (e) => {
    e.preventDefault();
    const { history } = this.props;
    const q = this.input.current.value;
    history.push(`/search?q=${q}`);
  }

  render() {
    const { classes, children } = this.props;
    return (
      <div>
        <AppBar elevation={0} className={classes.appBar} position="static">
          <Toolbar className={classes.toolbar}>
            <div className={cx(classes.toolbarContent, classes.centered)}>
              <Link to="/">
                <Logo className={classes.logo} />
              </Link>
              <div className={classes.grow} />
              <form onSubmit={this.onSubmitSearch}>
                <InputSearch
                  fullWidth={false}
                  placeholder="Search for repo"
                  inputProps={{
                    ref: this.input,
                    className: classes.searchInput,
                  }}
                />
              </form>
              <ThemeToggle />
            </div>
          </Toolbar>
        </AppBar>
        {children}
      </div>
    );
  }
}

export default compose(
  withRouter,
  withStyles(styles),
)(Layout);
