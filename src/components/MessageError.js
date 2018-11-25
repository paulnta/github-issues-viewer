import React from 'react';
import PropTypes from 'prop-types';
import ErrorIcon from '@material-ui/icons/ErrorOutlineOutlined';
import Message from './Message';

const MessageError = (props) => (
  <Message {...props} />
);

MessageError.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.node,
};

MessageError.defaultProps = {
  title: 'Something went wrong',
  description: 'There was a problem loading data. Check your internet and try again.',
  icon: <ErrorIcon color="error" />,
};

export default MessageError;
