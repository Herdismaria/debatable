import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Segment, Menu, Button, Header } from 'semantic-ui-react';
import ReactFitText from 'react-fittext';

export default function UnAuthedNavigation(props) {
  return (
    <div className="navigation">
      <Segment
        inverted
        textAlign="center"
        style={{ minHeight: 300, padding: '1em 0em' }}
        vertical
      >
        <Container>
          <Menu inverted pointing secondary size="large">
            <Menu.Item position="right" style={{ alignSelf: 'center' }}>
              <Button
                as={Link}
                to="/login"
                inverted
                style={{ marginTop: '0rem' }}
              >
                Log in
              </Button>
              <Button
                as={Link}
                to="/signUp"
                inverted
                style={{ marginLeft: '0.5em', marginTop: '0rem' }}
              >
                Sign up
              </Button>
            </Menu.Item>
          </Menu>
        </Container>

        <Container text>
          <ReactFitText compressor={0.5} maxFontSize={150}>
            <Header
              as="h1"
              content="Debatable"
              inverted
              style={{
                fontSize: '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '3em',
              }}
            />
          </ReactFitText>
        </Container>
      </Segment>
    </div>
  );
}
