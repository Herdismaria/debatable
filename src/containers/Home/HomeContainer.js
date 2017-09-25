import React from 'react';
import { Grid } from 'semantic-ui-react';
import { InfoBubble } from '../../components';
import ReactFitText from 'react-fittext';

class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        <div className="debate-info-container">
          <Grid centered columns={1}>
            <Grid.Column textAlign="center">
              <ReactFitText compressor={0.5} maxFontSize={50}>
                <h2>Topic of the day</h2>
              </ReactFitText>
            </Grid.Column>
            <Grid.Row centered>
              <Grid.Column mobile={6} tablet={3} computer={2}>
                <InfoBubble title="Time left" text="12:12:12" />
              </Grid.Column>
              <Grid.Column mobile={6} tablet={3} computer={2}>
                <InfoBubble title="Debaters" text="100.000" />
              </Grid.Column>
              <Grid.Column mobile={6} tablet={3} computer={2}>
                <InfoBubble title="Debates" text="1.000.000" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}
export default HomeContainer;
