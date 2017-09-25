import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainContainer, HomeContainer, DebateContainer } from '../containers';

export default function getRoutes(checkAuth) {
  return (
    <Router>
      <MainContainer>
        <Switch>
          <Route exact={true} path="/" component={checkAuth(HomeContainer)} />
          <Route path="/debate" component={checkAuth(DebateContainer)} />
        </Switch>
      </MainContainer>
    </Router>
  );
}
