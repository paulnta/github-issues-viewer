import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const common = {
  props: {
    MuiButtonBase: {
      disableRipple: true, // No more ripple
    },
  },
  typography: {
    useNextVariants: true,
    subtitle1: {
      fontWeight: 500,
    },
  },
};

const Themes = {
  dark: createMuiTheme({
    ...common,
    palette: {
      type: 'dark',
      primary: {
        main: "#40a9f3"
      },
      background: {
        default: '#2D2E32',
        paper: '#333438',
        contrast: '#242529'
      }
    },
  }),
  light: createMuiTheme({
    ...common,
    palette: {
      type: 'light',
      primary: {
        main: "#2C4FFE"
      },
      background: {
        contrast: grey[100],
      }
    },
  }),
};

const {
  Provider: ThemeContextProvider,
  Consumer: ThemeContext,
} = React.createContext();


class Theme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: window.localStorage.getItem('gh-theme') || 'dark',
      changeTheme: this.changeTheme,
    };
  }

  changeTheme = (type) => {
    this.setState({ type });
    window.localStorage.setItem('gh-theme', type);
  }

  render() {
    const { children } = this.props;
    const { type } = this.state;
    const theme = Themes[type] || Themes.dark;
    return (
      <ThemeContextProvider value={this.state}>
        <MuiThemeProvider theme={theme}>
          {children}
        </MuiThemeProvider>
      </ThemeContextProvider>
    );
  }
}

Theme.propTypes = {
  children: PropTypes.node,
};

export { ThemeContext };
export default Theme;
