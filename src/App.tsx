import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AuthProvider } from './components/contexts/AuthProvider';
import { UserProvider } from './components/contexts/user-context';
import CompetitionsPage from './components/pages/competitions-page/competitions-page';
import DashboardPage from './components/pages/dashboard-page/dashboard-page';
import HomePage from './components/pages/home-page/home-page';
import { LandingPage } from './components/pages/landing-page/landing-page';
import SettingsPage from './components/pages/settings-page/settings-page';
import UserCompetitionsPage from './components/pages/user-competitions-page/user-competitions-page';

function App() {
  return (
    <AuthProvider>
      <Router>
        <UserProvider>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/dashboard">
              <DashboardPage />
            </Route>
            <Route exact path="/competitions">
              <UserCompetitionsPage />
            </Route>
            <Route path="/competitions/:cid">
              <CompetitionsPage />
            </Route>
            <Route path="/teams">
              <HomePage />
            </Route>
            <Route path="/settings">
              <SettingsPage />
            </Route>
          </Switch>
        </UserProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
