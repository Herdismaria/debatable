import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { formatTimestamp } from '../../helpers/utils';

export default function Response({ response }) {
  const isUserResponse = response.get('isUserResponse');
  const res = isUserResponse ? (
    <div className="speak-bubble user">
      <div className="info-user">
        <div className="name">
          <span>{response.get('name')}</span>
        </div>
        <div className="timestamp">
          {formatTimestamp(response.get('timestamp'))}
        </div>
        <div>{response.get('text')}</div>
      </div>
      <div className="avatar-container-user">
        <img src={response.get('avatar')} alt="avatar" className="avatar" />
      </div>
    </div>
  ) : (
    <div className="speak-bubble guest">
      <div className="avatar-container-guest">
        <img src={response.get('avatar')} alt="avatar" className="avatar" />
      </div>
      <div className="info-guest">
        <div className="name">
          <span>{response.get('name')}</span>
        </div>
        <div className="timestamp">{response.get('timestamp')}</div>
        <div>{response.get('text')}</div>
      </div>
    </div>
  );
  return res;
}

Response.PropTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  reply: PropTypes.string.isRequired,
};
