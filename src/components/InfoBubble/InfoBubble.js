import React from 'react';
import PropTypes from 'prop-types';
import ReactFitText from 'react-fittext';

InfoBubble.PropTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default function InfoBubble({ title, text }) {
  return (
    <div>
      <ReactFitText compressor={0.5} minFontSize={15} maxFontSize={40}>
        <div className="info-bubble">{text}</div>
      </ReactFitText>
      <div className="info-bubble-title">{title}</div>
    </div>
  );
}
