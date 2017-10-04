import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ResponseForm } from '../../components';
import * as ResponsesActionCreators from '../../redux/modules/responses';

class ResponseFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpdateResponseText = this.handleUpdateResponseText.bind(this);
    this.handleAddResponse = this.handleAddResponse.bind(this);
  }

  handleAddResponse(e) {
    e.preventDefault();
    let text = this.props.text;
    if (!text.trim()) {
      return;
    }
    this.props.addResponse(this.props.text);
    this.props.updateResponseText('');
  }

  handleUpdateResponseText(text) {
    this.props.updateResponseText(text);
  }

  render() {
    return (
      <ResponseForm
        onSubmit={this.handleAddResponse}
        onChange={this.handleUpdateResponseText}
        text={this.props.text}
      />
    );
  }
}

function mapStatetoProps({ responses }, props) {
  return {
    text: responses.get('responseText'),
  };
}

function mapDispatchToProps(dispatch, props) {
  return bindActionCreators(ResponsesActionCreators, dispatch);
}
export default connect(mapStatetoProps, mapDispatchToProps)(
  ResponseFormContainer,
);
