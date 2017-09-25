import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Grid, Divider } from 'semantic-ui-react';
import ReactFitText from 'react-fittext';

export default function Login({ isFetching, error, onAuth }) {
  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Row>
        <Grid.Column width={16}>
          <ReactFitText compressor={0.5} maxFontSize={20}>
            <h4
              style={{
                fontFamily: 'Radley',
                padding: '10px',
                color: '#2a1e5c',
              }}
            >
              Sign in using:
            </h4>
          </ReactFitText>
          <Divider />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16}>
          <Button
            fluid
            color="facebook"
            onClick={event => {
              onAuth(event, 'FACEBOOK_AUTH');
            }}
          >
            <Icon name="facebook" />Facebook
          </Button>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16}>
          <Button
            fluid
            color="twitter"
            onClick={event => {
              onAuth(event, 'TWITTER_AUTH');
            }}
          >
            <Icon name="twitter" /> Twitter
          </Button>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16}>
          <Button
            fluid
            color="google plus"
            onClick={event => {
              onAuth(event, 'GOOGLE_AUTH');
            }}
          >
            <Icon name="google plus" /> Google Plus
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

Login.PropTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  onAuth: PropTypes.bool.isRequired,
};
