import React from 'react';
import ReactFitText from 'react-fittext';
import { Header, Divider, Comment, Container } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Reply } from '../../components';

class ChatContainer extends React.Component {
  render() {
    return (
      <div className="chat-container">
        <ReactFitText compressor={0.5} maxFontSize={30}>
          <Header as="h2" style={{ fontFamily: 'Radley', padding: '10px' }}>
            {this.props.topic}
          </Header>
        </ReactFitText>
        <Divider />
        <Container
          style={{
            height: '500px',
            overflow: 'auto',
            paddingBottom: '20px',
            margin: 'auto',
          }}
        >
          <Comment.Group threaded style={{ margin: 'auto' }}>
            <Reply
              avatar="https://starwarsavatar.com/img/selection-icons/human/human.svg"
              name="Matt"
              timestamp="Just now"
              reply="Some kind of long message!!!"
              isUserComment={true}
            />
            <Reply
              avatar="https://starwarsavatar.com/img/selection-icons/human/human.svg"
              name="Sam"
              timestamp="5 minutes ago"
              reply="Another message!!!"
              isUserComment={true}
            />
            <Reply
              avatar="https://starwarsavatar.com/img/selection-icons/human/human.svg"
              name="Sam"
              timestamp="5 minutes ago"
              reply="Another message MORE MORE MORE MORE MORE MORE MORE MORE MORE CONTENT!!!"
              isUserComment={false}
            />
            <Reply
              avatar="https://starwarsavatar.com/img/selection-icons/human/human.svg"
              name="Sam"
              timestamp="5 minutes ago"
              reply="Another message!!!"
              isUserComment={true}
            />
            <Reply
              avatar="https://starwarsavatar.com/img/selection-icons/human/human.svg"
              name="Sam"
              timestamp="5 minutes ago"
              reply="Another message!!!"
              isUserComment={false}
            />
            <Reply
              avatar="https://starwarsavatar.com/img/selection-icons/human/human.svg"
              name="Matt"
              timestamp="Just now"
              reply="Some kind of long message!!!"
              isUserComment={true}
            />
            <Reply
              avatar="https://starwarsavatar.com/img/selection-icons/human/human.svg"
              name="Sam"
              timestamp="5 minutes ago"
              reply="Another message!!!"
              isUserComment={true}
            />
            <Reply
              avatar="https://starwarsavatar.com/img/selection-icons/human/human.svg"
              name="Sam"
              timestamp="5 minutes ago"
              reply="Another message MORE MORE MORE MORE MORE MORE MORE MORE MORE CONTENT!!!"
              isUserComment={false}
            />
            <Reply
              avatar="https://starwarsavatar.com/img/selection-icons/human/human.svg"
              name="Sam"
              timestamp="5 minutes ago"
              reply="Another message!!!"
              isUserComment={true}
            />
            <Reply
              avatar="https://starwarsavatar.com/img/selection-icons/human/human.svg"
              name="Sam"
              timestamp="5 minutes ago"
              reply="Another message!!!"
              isUserComment={false}
            />
          </Comment.Group>
        </Container>
        <Divider />
      </div>
    );
  }
}

function mapStateToProps({ debate }, props) {
  return {
    topic: debate.get('topic'),
  };
}

/*function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( , dispatch)
}*/

export default connect(mapStateToProps)(ChatContainer);
