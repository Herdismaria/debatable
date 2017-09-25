import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as userActionCreators from '../../redux/modules/users';
import { Login } from '../../components';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleAuth = this.handleAuth.bind(this);
  }

  handleAuth(e, authType) {
    e.preventDefault();
    this.props.fetchAndHandleAuthedUser(authType).then(() => {
      this.props.history.replace('/debate');
    });
  }
  render() {
    return (
      <Login
        isFetching={this.props.isFetching}
        error={this.props.error}
        onAuth={this.handleAuth}
      />
    );
  }
}

LoginContainer.PropTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

function mapStateToProps({ users }, props) {
  return {
    isFetching: users.isFetching,
    error: users.error,
  };
}

function mapDispatchToProps(dispatch, props) {
  return bindActionCreators(userActionCreators, dispatch);
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginContainer),
);
