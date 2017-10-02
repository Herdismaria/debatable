import React from 'react';
import PropTypes from 'prop-types';
import { Container, Segment, Menu, Button } from 'semantic-ui-react';

export default function AuthedNavigation({ onLogOut }) {
  return (
    <div className="navigation">
      <Segment
        inverted
        textAlign="center"
        style={{ padding: '1em 0em' }}
        vertical
      >
        <Container>
          <Menu inverted stackable secondary size="large">
            <Menu.Item
              header
              style={{ fontSize: 30, fontFamily: 'Pacifico', padding: '0px' }}
            >
              Debatable
            </Menu.Item>
            <Menu.Item position="right">
              <Button
                inverted
                style={{
                  marginTop: '0rem',
                  fontFamily: 'Pacifico',
                }}
                onClick={event => onLogOut(event)}
              >
                Log out
              </Button>
            </Menu.Item>
          </Menu>
        </Container>
      </Segment>
    </div>
  );
}

AuthedNavigation.PropTypes = {
  onLogOut: PropTypes.func.isRequired,
};
