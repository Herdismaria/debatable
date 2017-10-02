import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { Map } from 'immutable';
import { InfoBubble } from '../../components';
import * as debateActionCreators from '../../redux/modules/debate';
import ReactFitText from 'react-fittext';

class HomeContainer extends React.Component {
  render() {
    let { topic, responseCount } = this.props;
    return (
      <div>
        <div className="debate-info-container">
          <Grid centered columns={1}>
            <Grid.Column textAlign="center">
              <ReactFitText compressor={0.5} maxFontSize={50}>
                <h2>{topic}</h2>
              </ReactFitText>
            </Grid.Column>
            <Grid.Row centered>
              <Grid.Column mobile={6} tablet={3} computer={2}>
                <InfoBubble title="Start time" text={'12:12:12'} />
              </Grid.Column>
              <Grid.Column mobile={6} tablet={3} computer={2}>
                <InfoBubble title="Debaters" text="100.000" />
              </Grid.Column>
              <Grid.Column mobile={6} tablet={3} computer={2}>
                <InfoBubble title="Debates" text={responseCount} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ debate }, props) {
  return {
    topic: debate.get('topic'),
    startTime: debate.get('startTime'),
    responseCount: debate.get('responseCount'),
  };
}
function mapDispatchToProps(dispatch, props) {
  return bindActionCreators(debateActionCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
