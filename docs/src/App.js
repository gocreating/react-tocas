import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

let App = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        component={require('./pages/HomePage').default}
      />
      <Route
        component={require('./pages/NotFoundPage').default}
      />
    </Switch>
  </Router>
);

export default App;
