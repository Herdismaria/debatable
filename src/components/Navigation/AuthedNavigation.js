import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Segment, Menu, Button, Header } from 'semantic-ui-react';
import ReactFitText from 'react-fittext';

export default function AuthedNavigation() {
  return (
    <div className="navigation">
      <Segment
        inverted
        textAlign="center"
        style={{ minHeight: 100, padding: '1em 0em' }}
        vertical
      >
        <Container>
          <Menu inverted stackable secondary size="large">
            <Menu.Item header style={{ fontSize: 30, fontFamily: 'Pacifico' }}>
              Debatable
            </Menu.Item>
            <Menu.Item position="right">
              <Button as={Link} to="/logout" inverted>
                Log out
              </Button>
            </Menu.Item>
          </Menu>
        </Container>
      </Segment>
    </div>
  );
}
