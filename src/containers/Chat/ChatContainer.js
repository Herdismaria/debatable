import React from 'react';
import ReactFitText from 'react-fittext';
import { Header, Divider, Comment, Container } from 'semantic-ui-react';
import { Reply } from '../../components';

class ChatContainer extends React.Component {
  render() {
    return (
      <div className="chat-container">
        <ReactFitText compressor={0.5} maxFontSize={30}>
          <Header as="h2" style={{ fontFamily: 'Radley', padding: '10px' }}>
            Topic of the day
          </Header>
        </ReactFitText>
        <Divider />
        <Container
          style={{
            maxHeight: '550px',
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
export default ChatContainer;
