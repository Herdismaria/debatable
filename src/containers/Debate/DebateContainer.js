import React from 'react';
import MediaQuery from 'react-responsive';
import { Grid } from 'semantic-ui-react';
import {
  InformationContainer,
  ChatContainer,
  ResponseFormContainer,
} from '../../containers';

class DebateContainer extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery minDeviceWidth={1224}>
          <Grid style={{ margin: '0' }}>
            <Grid.Row style={{ padding: '0px' }}>
              <Grid.Column width={4}>
                <InformationContainer smallScreen={false} />
              </Grid.Column>
              <Grid.Column width={12}>
                <Grid.Row>
                  <ChatContainer />
                </Grid.Row>
                <Grid.Row textAlign="left">
                  <ResponseFormContainer />
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <ChatContainer />
          <ResponseFormContainer />
        </MediaQuery>
      </div>
    );
  }
}

export default DebateContainer;
