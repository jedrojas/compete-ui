import './user-dashboard-activity-widget.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import format from 'date-fns/format';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import { sbrIconMap } from '../../../models/data-models';
import { useGetStravaActivities } from '../../../queries/get-strava-activities-query';
import BaseWidget from '../../bases/base-widget/base-widget';
import { useUserActivities } from '../../hooks/activities-queries';
import LoadingSpinnerContainer from '../loading-spinner-container/loading-spinner-container';

export interface IUserDashboardActivityWidget {}

export const UserDashboardActivityWidget: React.FC<IUserDashboardActivityWidget> = () => {
  const { data, loading: activitiesLoading } = useUserActivities();
  const stravaAccessToken = localStorage.getItem("stravaAccessToken");
  const { getStravaActivities, loading } = useGetStravaActivities();

  return (
    <BaseWidget>
      <BaseWidget.Header>
        <Row noGutters className="mx-2">
          My Recent Activities
        </Row>
      </BaseWidget.Header>
      <BaseWidget.Body>
        <LoadingSpinnerContainer loading={activitiesLoading}>
          {data?.length ? (
            <>
              <Row className="m-2 py-2 font-montserrat user-activity-li uat-header">
                <Col
                  xs={{ span: "5", offset: "1" }}
                  className="d-flex align-items-end"
                >
                  {"Name"}
                </Col>
                <Col xs="3" className="d-flex align-items-end">
                  {"Distance (meters)"}
                </Col>
                <Col xs="2" className="d-flex align-items-end">
                  {"Date"}
                </Col>
              </Row>
              {data.map((activity) => (
                <Row className="m-2 font-montserrat user-activity-li">
                  <Col
                    xs="1"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <FontAwesomeIcon
                      size={"1x"}
                      icon={sbrIconMap.get(activity.type)!}
                      className={classnames({
                        "fa-flip-horizontal": activity.type === "swim",
                      })}
                    />
                  </Col>

                  <Col xs="5" className="d-flex">
                    {activity.name ?? "No Name"}
                  </Col>

                  <Col xs="3" className="d-flex">
                    {activity.distance}
                  </Col>

                  <Col xs="2" className="d-flex">
                    {format(new Date(activity.end_date), "MM/dd/yy")}
                  </Col>
                </Row>
              ))}
            </>
          ) : (
            <Row className="m-2 py-2 font-montserrat">
              {stravaAccessToken
                ? `No activities have been added yet. Try adding your activities from Strava by clicking the button below!`
                : `No activities have been added yet. Try connecting to Strava by
            clicking the button below!`}
            </Row>
          )}
        </LoadingSpinnerContainer>

        {stravaAccessToken ? (
          <Button
            onClick={
              () => getStravaActivities() //.then(() => window.location.reload())
            }
            className="m-2"
          >
            <LoadingSpinnerContainer loading={loading}>
              Get Strava activities
            </LoadingSpinnerContainer>
          </Button>
        ) : (
          <Button
            onClick={() =>
              (window.location.href = `http://www.strava.com/oauth/authorize?client_id=54661&response_type=code&redirect_uri=http://localhost:3001/dashboard/exchange_token&approval_prompt=force&scope=activity:read&state=strava_auth_code`)
            }
          >
            Connect to Strava
          </Button>
        )}
      </BaseWidget.Body>
    </BaseWidget>
  );
};

export default UserDashboardActivityWidget;
