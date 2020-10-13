import React from 'react';
import { Home, ProjectDetails } from './containers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { projectDetailsRoutes } from './constants';

const App = () => {
  return (
    <Router>
      <Switch>
        {projectDetailsRoutes.map((item) => (
          <Route key={item.route} path={item.route}>
            <ProjectDetails {...item.projectDetails} />
          </Route>
        ))}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
