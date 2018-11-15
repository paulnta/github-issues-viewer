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
