import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import CompetitionAdminView from './competition-admin-view/competition-admin-view';
import { CompetitionProvider } from './competition-context';
import CompetitionParticipantView from './competition-participant-view/competition-participant-view';
import CompetitionPrivateView from './competition-private-view/competition-private-view';

export interface ICompetitionPage {}

export const CompetitionPage: React.FC<ICompetitionPage> = () => {
  let { path } = useRouteMatch();

  return (
    <CompetitionProvider>
      {/* <BasePageLayout> */}
      <Switch>
        <Route exact path={path}>
          <CompetitionParticipantView />
          <CompetitionPrivateView />
        </Route>
        <Route exact path={`${path}/admin`}>
          <CompetitionAdminView />
        </Route>
      </Switch>
      {/* </BasePageLayout> */}
    </CompetitionProvider>
  );
};

export default CompetitionPage;
