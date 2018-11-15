import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const TimeAgo = ({ date }) => (
  <span>{dayjs(date).fromNow()}</span>
);

TimeAgo.propTypes = {
  date: PropTypes.string,
};

export default TimeAgo;
