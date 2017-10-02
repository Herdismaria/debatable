import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Dimmer, Loader } from 'semantic-ui-react';
import * as userActionCreators from '../../redux/modules/users';
import * as debateActionCreators from '../../redux/modules/debate';
import { formatUserInfo } from '../../helpers/utils';
import { firebaseAuth } from '../../config/constants';
import { AuthedNavigation, UnAuthedNavigation, Footer } from '../../components';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    this.props.fetchAndHandleDebate();
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        const userData = user.providerData[0];
        const userInfo = formatUserInfo(
          userData.displayName,
          userData.photoURL,
          user.uid,
        );
        this.props.authUser(user.uid);
        this.props.fetchingUserSuccess(user.uid, userInfo, Date.now());
        //this.props.setUsersLikes();
        if (this.props.history.location.pathname === '/debate') {
          this.props.history.replace('debate');
        }
      } else {
        this.props.removeFetchingUser();
      }
    });
  }

  handleLogOut(e) {
    e.preventDefault();

    this.props.logoutAndUnauth();
    this.props.history.push('/');
  }

  render() {
    return this.props.isFetching === true ? (
      <Dimmer active inverted>
        <Loader size="large">Loading</Loader>
      </Dimmer>
    ) : (
      <div>
        {this.props.isAuthed === true ? (
          <AuthedNavigation onLogOut={this.handleLogOut} />
        ) : (
          <UnAuthedNavigation />
        )}
        <div>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps({ users }, props) {
  return {
    isAuthed: users.isAuthed,
    isFetching: users.isFetching,
  };
}

function mapDispatchToProps(dispatch, props) {
  return bindActionCreators(
    {
      ...userActionCreators,
      ...debateActionCreators,
    },
    dispatch,
  );
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MainContainer),
);
