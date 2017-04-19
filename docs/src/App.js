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
        exact
        path="/elements"
        component={require('./pages/elements/NavigationPage').default}
      />
      <Route
        exact
        path="/elements/button"
        component={require('./pages/elements/ButtonPage').default}
      />
      <Route
        exact
        path="/elements/container"
        component={require('./pages/elements/ContainerPage').default}
      />
      <Route
        exact
        path="/elements/header"
        component={require('./pages/elements/HeaderPage').default}
      />
      <Route
        exact
        path="/elements/slate"
        component={require('./pages/elements/SlatePage').default}
      />
      <Route
        exact
        path="/elements/segment"
        component={require('./pages/elements/SegmentPage').default}
      />
      <Route
        exact
        path="/collections"
        component={require('./pages/collections/NavigationPage').default}
      />
      <Route
        exact
        path="/collections/grid"
        component={require('./pages/collections/GridPage').default}
      />
      <Route
        component={require('./pages/NotFoundPage').default}
      />
    </Switch>
  </Router>
);

export default App;
