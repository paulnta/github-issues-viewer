import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Typography from '@material-ui/core/Typography';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Span } from './Skeleton';
import Code from './Code';
import CodeInline from './CodeInline';

const styles = theme => ({
  root: {
    ...theme.typography.body1,
    color: theme.palette.text.primary,
    '& p': {
      wordWrap: 'break-word',
    },
    '& img': {
      width: '100%',
      height: 'auto',
    }
  },
});

const renderers = {
  code: Code,
  inlineCode: CodeInline,
  // eslint-disable-next-line react/prop-types
  paragraph: ({ children }) => (
    <p>
      <Span>{children}</Span>
    </p>
  ),
};

const Markdown = ({ classes, className, ...props }) => (
  <ReactMarkdown
    className={cx(classes.root, className)}
    renderers={renderers}
    {...props}
  />
);

Markdown.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
};

export default withStyles(styles)(Markdown);
