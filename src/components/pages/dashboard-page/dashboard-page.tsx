import '../../../styles/variables.scss';

import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { useGetStravaActivities } from '../../../queries/get-strava-activities-query';
import BaseNeoButton from '../../bases/base-neo-button/base-neo-button';
import BasePageLayout from '../../bases/base-page-layout/base-page-layout';
import UserCompetitionsSection from '../../shared/user-competitions-section/user-competitions-section';
import UserDashboardActivityWidget from '../../shared/user-dashboard-activity-widget/user-dashboard-activity-widget';

export interface IDashboardPage {}

export const DashboardPage: React.FC<IDashboardPage> = () => {
  const { user } = useAuth0();
  // This should be replaced with a user field that
  // says whether or not the user has connected to strava
  const stravaAccessToken = localStorage.getItem("stravaAccessToken");

  const { getStravaActivities, loading } = useGetStravaActivities();

  return (
    <BasePageLayout>
      <Col>
        <div>
          Things to add to this page: Competitions section (list comps, create
          new comp), Teams section (list teams), activity summary,
        </div>

        <UserCompetitionsSection />

        {/* TODO - Jed: make this look good */}

        {stravaAccessToken ? (
          <>
            Strava Synced
            <UserDashboardActivityWidget />
          </>
        ) : (
          <BaseNeoButton
            height="50px"
            onClick={() =>
              (window.location.href = `http://www.strava.com/oauth/authorize?client_id=54661&response_type=code&redirect_uri=http://localhost:3001/dashboard/exchange_token&approval_prompt=force&scope=activity:read&state=strava_auth_code`)
            }
          >
            Connect to Strava
          </BaseNeoButton>
        )}

        {/* end strava import component  */}

        {/* strava import component */}
        {/* TODO - Jed: make this look good */}

        {stravaAccessToken && (
          <BaseNeoButton height="50px" onClick={() => getStravaActivities()}>
            {loading ? "Retrieving" : "Get Strava activities"}
            {/* add loading component */}
            {/* add feedback telling user activities were retrieved */}
          </BaseNeoButton>
        )}

        <Row>{JSON.stringify(user, null, 2)}</Row>

        {/* end strava import component  */}
      </Col>
    </BasePageLayout>
  );
};

export default DashboardPage;
