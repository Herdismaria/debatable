import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { ResponseContainer } from '../../containers';
import ReactFitText from 'react-fittext';
import { Header, Divider, Comment, Container } from 'semantic-ui-react';

function NewResponsesAvailable({ handleClick }) {
  return <div onClick={handleClick}>New responses available</div>;
}

class Chat extends React.Component {
  scrollToBottom = () => {
    const node = ReactDOM.findDOMNode(this.messagesEnd);
    node.scrollIntoView({ behavior: 'instant' });
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }
  render() {
    return (
      <div className="chat">
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
          {this.props.isFetchingFeed === true ? (
            <h1>{'Fetching...'}</h1>
          ) : this.props.responseIds.size === 0 ? (
            <p>
              {'This is unfortunate.'} <br />{' '}
              {'It appears no one has started debating.'}
            </p>
          ) : null}
          {
            <Comment.Group threaded style={{ margin: 'auto' }}>
              {this.props.responseIds.map(responseId => {
                return (
                  <ResponseContainer responseId={responseId} key={responseId} />
                );
              })}
            </Comment.Group>
          }

          {this.props.newResponsesAvailable && (
            <NewResponsesAvailable
              handleClick={this.props.resetNewResponsesAvailable}
            />
          )}
          <div
            ref={el => {
              this.messagesEnd = el;
            }}
          />
        </Container>
        <Divider />
      </div>
    );
  }
}

Chat.PropTypes = {
  topic: PropTypes.string.isRequired,
};

export default Chat;
