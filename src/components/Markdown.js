import React from 'react';
import ReactMarkdown from 'react-markdown';
import Typography from '@material-ui/core/Typography';
import { createSkeletonElement } from '@trainline/react-skeletor';
import Code from './Code';
import CodeInline from './CodeInline';

const Span = createSkeletonElement('span');

const renderers = {
  code: Code,
  inlineCode: CodeInline,
  image: ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      style={{ width: '100%', height: 'auto' }}
    />
  ),
  paragraph: ({ children, style }) => (
    <Typography variant="body1" style={{ marginBottom: 16 }}>
      <Span>{children}</Span>
    </Typography>
  ),
};

const Markdown = (props) => (
  <ReactMarkdown
    {...props}
    renderers={renderers}
  />
);

export default Markdown;
