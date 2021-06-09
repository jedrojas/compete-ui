import './user-dashboard-competition-widget.scss';

import { faUserCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import BaseWidget from '../../../bases/base-widget/base-widget';
import { useUserCompetitions } from '../../../hooks/competitions-queries';
import CreateCompetitionModal from '../../../shared/create-competition-modal/create-competition-modal';
import FindCompetitionModal from '../../../shared/find-competition-modal/find-competition-modal';
import TimeLeft from '../../../shared/time-left/time-left';

export interface IUserDashboardCompetitionsWidget {}

export const UserDashboardCompetitionsWidget: React.FC<IUserDashboardCompetitionsWidget> = () => {
  const { userCompetitions } = useUserCompetitions();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showFindModal, setShowFindModal] = useState(false);

  return (
    <>
      <BaseWidget>
        <BaseWidget.Header>
          <Row noGutters className="mx-2">
            My Competitions
          </Row>
        </BaseWidget.Header>
        <BaseWidget.Body>
          <Row className="m-2 py-2 font-montserrat">
            {userCompetitions.length
              ? userCompetitions.map((competition) => (
                  <Row className="w-100 my-2">
                    <Col xs="7" className="cursor-pointer">
                      <Link
                        to={`/competition/${competition.id}`}
                        style={{ color: "black" }}
                      >
                        {competition.name}
                        {competition.isUserAdmin ? (
                          <FontAwesomeIcon icon={faUserCog} className="ml-2" />
                        ) : null}
                      </Link>
                    </Col>
                    <Col xs="5">
                      <TimeLeft
                        start_date={competition.start_date}
                        end_date={competition.end_date}
                      />
                    </Col>
                  </Row>
                ))
              : "Whoops, looks like you haven't joined any competitions yet!"}{" "}
          </Row>

          <Button onClick={() => setShowCreateModal(true)} className="m-2">
            Create a competition
          </Button>
          <Button onClick={() => setShowFindModal(true)} className="m-2">
            Find existing competition
          </Button>
        </BaseWidget.Body>
      </BaseWidget>

      <CreateCompetitionModal
        show={showCreateModal}
        setShow={setShowCreateModal}
      />
      <FindCompetitionModal show={showFindModal} setShow={setShowFindModal} />
    </>
  );
};

export default UserDashboardCompetitionsWidget;
