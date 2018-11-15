import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Highlight from 'react-highlight';


const styles = theme => ({
  '@global': {
    '.hljs': {
      display: 'block',
      overflowX: 'auto',
      padding: '1em',
      background: theme.palette.background.contrast,
      color: '#DCDCDC',
      borderRadius: 2,
      fontFamily: "'Roboto Mono', monospace;",
      fontSize: 14,
    },
    '.hljs-keyword, .hljs-literal, .hljs-symbol, .hljs-name': {
      color: '#569CD6'
    },
    '.hljs-link': {
      color: '#569CD6',
      textDecoration: 'underline'
    },
    '.hljs-built_in, .hljs-type': {
      color: '#4EC9B0'
    },
    '.hljs-number, .hljs-class': {
      color: '#B8D7A3'
    },
    '.hljs-string, .hljs-meta-string': {
      color: '#D69D85'
    },
    '.hljs-regexp, .hljs-template-tag': {
      color: '#9A5334'
    },
    '.hljs-subst, .hljs-function, .hljs-title, .hljs-params, .hljs-formula': {
      color: '#DCDCDC'
    },
    '.hljs-comment, .hljs-quote': {
      color: '#57A64A',
      fontStyle: 'italic'
    },
    '.hljs-doctag': {
      color: '#608B4E'
    },
    '.hljs-meta, .hljs-meta-keyword, .hljs-tag': {
      color: '#9B9B9B'
    },
    '.hljs-variable, .hljs-template-variable': {
      color: '#BD63C5'
    },
    '.hljs-attr, .hljs-attribute, .hljs-builtin-name': {
      color: '#9CDCFE'
    },
    '.hljs-section': {
      color: 'gold'
    },
    '.hljs-emphasis': {
      fontStyle: 'italic'
    },
    '.hljs-strong': {
      fontWeight: 'bold'
    },
    '.hljs-bullet, .hljs-selector-tag, .hljs-selector-id, .hljs-selector-class, .hljs-selector-attr, .hljs-selector-pseudo': {
      color: '#D7BA7D'
    },
    '.hljs-addition': {
      backgroundColor: '#144212',
      display: 'inline-block',
      width: '100%'
    },
    '.hljs-deletion': {
      backgroundColor: '#600',
      display: 'inline-block',
      width: '100%'
    }
  },
  root: {
    width: '100%',
    overflow: 'auto',
  },
});

const Code = ({ classes, language, value }) => (
  <Highlight className={cx(classes.root, language)}>
    {value}
  </Highlight>
);

Code.propTypes = {
  language: PropTypes.string,
  value: PropTypes.string,
};

export default withStyles(styles)(Code);
