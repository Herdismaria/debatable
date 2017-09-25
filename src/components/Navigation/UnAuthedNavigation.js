import React from 'react';
import ReactFitText from 'react-fittext';
import {
  Container,
  Segment,
  Menu,
  Button,
  Header,
  Popup,
} from 'semantic-ui-react';
import { LoginContainer } from '../../containers';

export default function UnAuthedNavigation() {
  return (
    <div className="navigation">
      <Segment
        inverted
        textAlign="center"
        style={{ minHeight: 300, padding: '1em 0em' }}
        vertical
      >
        <Container>
          <Menu inverted pointing secondary stackable size="large">
            <Menu.Item position="right" style={{ alignSelf: 'center' }}>
              <Popup
                position="bottom right"
                trigger={
                  <Button
                    inverted
                    style={{ marginTop: '0rem', fontFamily: 'Pacifico' }}
                  >
                    Log in
                  </Button>
                }
                on="click"
              >
                <Popup.Content>
                  <LoginContainer />
                </Popup.Content>
              </Popup>
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
