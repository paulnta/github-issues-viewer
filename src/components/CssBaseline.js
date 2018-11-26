import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { emphasize } from '@material-ui/core/styles/colorManipulator';


const styles = theme => {
  const fadeColor = emphasize(theme.palette.background.paper, 0.1);
  return {
    '@global': {
      html: {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        // Change from `box-sizing: content-box` so that `width`
        // is not affected by `padding` or `border`.
        boxSizing: 'border-box',
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit',
      },
      body: {
        margin: 0, // Remove the margin in all browsers.
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        '@media print': {
          // Save printer ink.
          backgroundColor: theme.palette.common.white,
        },
      },
      a: {
        textDecoration: 'none',
        color: theme.palette.primary.main,
      },
      strong: {
        fontWeight: 500,
      },
      p: {
        marginTop: 0,
        marginBottom: theme.spacing.unit * 2,
      },
      hr: {
        backgroundColor: theme.palette.divider,
        border: 0,
        height: '.25em',
        margin: `${theme.spacing.unit * 3}px 0`,
        padding: 0,
      },
      blockquote: {
        color: theme.palette.text.secondary,
        borderLeft: `.25em solid ${theme.palette.divider}`,
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        margin: 0,
        marginBottom: theme.spacing.unit * 2,
      },
      '@keyframes pending-animation': {
        '0%': { opacity: 0.8 },
        '50%': { opacity: 0.4 },
        '100%': { opacity: 0.8 },
      },
      '.skeleton-pending': {
        color: `${fadeColor} !important`,
        background: `${fadeColor} !important`,
        userSelect: 'none',
        animationName: 'pending-animation',
        animationDuration: '1.5s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
      }
    },
  };
};

const CssBaseline = ({ children }) => children;

CssBaseline.propTypes = {
  children: PropTypes.node,
};

export default withStyles(styles)(CssBaseline);
