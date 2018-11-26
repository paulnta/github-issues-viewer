import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Prism from '../lib/prism';

import { ThemeContext } from './Theme';

const styles = theme => {
  return {
    root: {
      // Common styles
      fontSize: `${theme.typography.fontSize}px`,
      padding: '1em',
      margin: '.5em 0',
      overflow: 'auto',
      background: theme.palette.background.contrast,
      borderRadius: 2,
      textAlign: 'left',
      whiteSpace: 'pre',
      wordSpacing: 'normal',
      wordBreak: 'normal',
      wordWrap: 'normal',
      lineHeight: '1.5',
      tabSize: '2',
      hyphens: 'none',

      '& code': {
        fontFamily: "'Roboto Mono', monospace",
      },
      '& .namespace': {
        opacity: '.7'
      },
      '& .token.italic': {
        fontStyle: 'italic'
      },
      '& .token.entity': {
        cursor: 'help'
      },
      '& .token.important, .token.bold': {
        fontWeight: 'bold'
      },
    },
    // Dark theme (prism-okaidia) */
    dark: {
      color: '#f8f8f2',
      textShadow: '0 1px rgba(0, 0, 0, 0.3)',

      '& .token.comment, .token.prolog, .token.doctype, .token.cdata': {
        color: 'slategray'
      },
      '& .token.punctuation': {
        color: '#f8f8f2'
      },
      '& .token.property, .token.tag, .token.constant, .token.symbol, .token.deleted': {
        color: '#f92672'
      },
      '& .token.boolean, .token.number': {
        color: '#ae81ff'
      },
      '& .token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted': {
        color: '#a6e22e'
      },
      '& .token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string, .token.variable': {
        color: '#f8f8f2'
      },
      '& .token.atrule, .token.attr-value, .token.function, .token.class-name': {
        color: '#e6db74'
      },
      '& .token.keyword': {
        color: '#66d9ef'
      },
      '& .token.regex, .token.important': {
        color: '#fd971f'
      },
    },
    // Light theme (prism)
    light: {
      color: 'black',
      textShadow: '0 1px white',

      '& .token.comment, .token.prolog, .token.doctype, .token.cdata': {
        color: 'slategray'
      },
      '& .token.punctuation': {
        color: '#999'
      },
      '& .token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted': {
        color: '#905'
      },
      '& .token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted': {
        color: '#690'
      },
      '& .token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string': {
        color: '#9a6e3a',
        background: 'hsla(0, 0%, 100%, .5)'
      },
      '& .token.atrule, .token.attr-value, .token.keyword': {
        color: '#07a'
      },
      '& .token.function, .token.class-name': {
        color: '#DD4A68'
      },
      '& .token.regex, .token.important, .token.variable': {
        color: '#e90'
      },
    },
  };
};

class Code extends PureComponent {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string),
    language: PropTypes.string,
    value: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.node = React.createRef();
  }

  componentDidMount() {
    this.highlight();
  }

  componentDidUpdate() {
    this.highlight();
  }

  highlight() {
    Prism.highlightElement(this.node.current, false);
  }

  render() {
    const { classes, value, language } = this.props;
    return (
      <ThemeContext>
        {({ type }) => {

          const themeClassName = type === 'dark'
            ? classes.dark
            : classes.light;

          const languageClassName = `lang-${language}`;

          return (
            <pre className={cx(classes.root, themeClassName)}>
              <code className={languageClassName} ref={this.node}>
                {value}
              </code>
            </pre>
          );
        }}
      </ThemeContext>
    );
  }
}

export default withStyles(styles)(Code);
