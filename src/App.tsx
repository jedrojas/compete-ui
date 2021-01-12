import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AuthProvider } from './components/contexts/AuthProvider';
import CompetitionsPage from './components/pages/competitions-page/competitions-page';
import DashboardPage from './components/pages/dashboard-page/dashboard-page';
import HomePage from './components/pages/home-page/home-page';
import { LandingPage } from './components/pages/landing-page/landing-page';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
          <Route path="/competitions">
            <CompetitionsPage />
          </Route>
          <Route path="/teams">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
