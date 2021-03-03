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

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/dashboard">
              <DashboardPage />
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
        </Router>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
