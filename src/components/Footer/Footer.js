import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Container, Grid, Header, List } from 'semantic-ui-react';

export default function Footer(props) {
  return (
    <div className="footer">
      <Segment inverted vertical style={{ padding: '4em 0em' }}>
        <Container>
          <Grid textAlign="center">
            <Grid.Row>
              <Grid.Column width={9}>
                <Header as="h3" inverted>
                  Debatable
                </Header>
                <p>Information and Copyright</p>
                <p>
                  {' '}
                  Powered by <strong>Firebase</strong> and{' '}
                  <strong>React</strong>
                </p>
                <p>
                  You may view the <a href="#">Source Code</a> on Github{' '}
                </p>
                <p>© 2017 Herdis Maria Sigurdardottir</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}
