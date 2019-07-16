import React from 'react';
import PropTypes from 'prop-types';
import { ChatBubbleOutline } from '@material-ui/icons';

const CommentIcon = ({ className }) => (
  <ChatBubbleOutline className={className} />
);

CommentIcon.propTypes = {
  className: PropTypes.string
};

export default CommentIcon;
