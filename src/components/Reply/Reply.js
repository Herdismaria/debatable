import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from 'semantic-ui-react';

let contentStyle = {
  textAlign: 'left',
  backgroundColor: '#FEACAC',
  borderRadius: '20px',
  padding: '10px',
  marginRight: '3.5em',
};

let avatarStyle = {};

export default function Reply({
  avatar,
  name,
  timestamp,
  reply,
  isUserComment,
}) {
  return (
    <Comment>
      <Comment.Avatar
        as="a"
        src={avatar}
        style={isUserComment ? { ...avatarStyle, float: 'right' } : {}}
      />
      <Comment.Content
        style={
          isUserComment
            ? {
                ...contentStyle,
                backgroundColor: '#9E98B4',
              }
            : contentStyle
        }
      >
        <Comment.Author as="a">{name}</Comment.Author>
        <Comment.Metadata>
          <span>{timestamp}</span>
        </Comment.Metadata>
        <Comment.Text>{reply}</Comment.Text>
        <Comment.Actions>
          <a>Reply</a>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  );
}

Reply.PropTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  reply: PropTypes.string.isRequired,
  isUserComment: PropTypes.bool.isRequired,
};
