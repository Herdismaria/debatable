import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Response } from '../../components';
import React from 'react';
import * as responseActionCreators from '../../redux/modules/responses';

class ResponseContainer extends React.Component {
  render() {
    return (
      <div>
        <Response
          response={this.props.response.merge({
            isUserResponse: this.props.isUserResponse,
          })}
        />
      </div>
    );
  }
}

function mapStateToProps({ responses, userResponses }, props) {
  return {
    response: responses.get(props.responseId),
    isUserResponse: userResponses.get(props.responseId) === true,
  };
}
function mapDispatchToProps(dispatch, props) {
  return bindActionCreators(responseActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponseContainer);
