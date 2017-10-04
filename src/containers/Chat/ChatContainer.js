import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { Chat } from '../../components';
import * as feedActionCreators from '../../redux/modules/feed';
import * as userResponsesActionCreators from '../../redux/modules/userResponses';

class ChatContainer extends React.Component {
  componentDidMount() {
    this.props.fetchAndHandleUserResponses();
    this.props.setAndHandleFeedListener();
  }

  render() {
    return (
      <div>
        <Chat {...this.props} />
      </div>
    );
  }
}

const { string, bool, func } = Proptypes;
ChatContainer.Proptypes = {
  topic: string.isRequired,
  newResponsesAvailable: bool.isRequired,
  error: string.isRequired,
  isFetchingDebate: bool.isRequired,
  setAndHandleFeedListener: func.isRequired,
  resetNewResponsesAvailable: func.isRequired,
};

function mapStateToProps({ debate, feed, userResponses }, props) {
  return {
    topic: debate.get('topic'),
    isFetchingDebate: debate.get('isFetching'),
    newResponsesAvailable: feed.get('newResponsesAvailable'),
    error: feed.get('error'),
    isFetchingFeed: feed.get('isFetching'),
    responseIds: feed.get('responseIds'),
    userResponses: userResponses.get('userResponses'),
  };
}

function mapDispatchToProps(dispatch, props) {
  return bindActionCreators(
    { ...feedActionCreators, ...userResponsesActionCreators },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
