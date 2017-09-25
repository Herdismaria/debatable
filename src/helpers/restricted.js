import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export default BaseComponent => {
  class Restricted extends Component {
    componentWillMount() {
      this.checkAuthentication(this.props);
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.location !== this.props.location) {
        this.checkAuthentication(nextProps);
      }
    }

    checkAuthentication(props) {
      const { history } = props;
      const nextPathName = history.location.pathname;
      const isAuthed = true;
      if (nextPathName === '/') {
        if (isAuthed === true) {
          history.replace({ pathname: '/debate' });
        }
      } else {
        if (isAuthed !== true) {
          history.replace({ pathname: '/' });
        }
      }
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  }

  return withRouter(Restricted);
};
