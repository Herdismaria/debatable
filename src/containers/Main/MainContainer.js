import React from 'react';
import { AuthedNavigation, UnAuthedNavigation, Footer } from '../../components';
const isAuthed = true;
class MainContainer extends React.Component {
  render() {
    return (
      <div>
        {isAuthed === true ? <AuthedNavigation /> : <UnAuthedNavigation />}
        <div>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default MainContainer;
