import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AuthProvider } from './components/contexts/AuthProvider';
import { UserProvider } from './components/contexts/user-context';
import CompetitionPage from './components/pages/competition-page/competition-page';
import DashboardPage from './components/pages/dashboard-page/dashboard-page';
import HomePage from './components/pages/home-page/home-page';
import { LandingPage } from './components/pages/landing-page/landing-page';
import UserCompetitionsPage from './components/pages/user-competitions-page/user-competitions-page';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <UserProvider>
            <Route path="/dashboard">
              <DashboardPage />
            </Route>
            <Route exact path="/competitions">
              <UserCompetitionsPage />
            </Route>
            <Route path="/competition/:cid">
              <CompetitionPage />
            </Route>
            <Route path="/teams">
              <HomePage />
            </Route>
          </UserProvider>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
