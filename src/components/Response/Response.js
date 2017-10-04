import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from 'semantic-ui-react';

let contentStyle = {
  textAlign: 'left',
  backgroundColor: '#FEACAC',
  borderRadius: '20px',
  padding: '10px',
  marginTop: '1em',
  marginRight: '3.5em',
};

let avatarStyle = {};

export default function Response({ response }) {
  //console.log(response);
  const isUserResponse = response.get('isUserResponse');
  return (
    <Comment>
      <Comment.Avatar
        as="a"
        src={response.get('avatar')}
        style={isUserResponse ? { ...avatarStyle, float: 'right' } : {}}
      />
      <Comment.Content
        style={
          isUserResponse
            ? {
                ...contentStyle,
                backgroundColor: '#9E98B4',
              }
            : contentStyle
        }
      >
        <Comment.Author as="a">{response.get('name')}</Comment.Author>
        <Comment.Metadata>
          <span>{response.get('timestamp')}</span>
        </Comment.Metadata>
        <Comment.Text>{response.get('text')}</Comment.Text>
        <Comment.Actions>
          <a>Reply</a>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  );
}

Response.PropTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  reply: PropTypes.string.isRequired,
  //isUserComment: PropTypes.bool.isRequired,
};
