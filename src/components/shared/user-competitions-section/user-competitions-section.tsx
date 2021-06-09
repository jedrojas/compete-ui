import './user-competitions-section.scss';

import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import BaseNeoButton from '../../bases/base-neo-button/base-neo-button';
import BaseNeoCard from '../../bases/base-neo-card/base-neo-card';
import { useDashboardCompetitions } from '../../hooks/user-dashboard-hooks';
import { generateColor } from '../../utils/generate-color';
import NewCompetitionModal from '../new-competition-modal/new-competition-modal';

export interface IUserCompetitionsSection {}

export const UserCompetitionsSection: React.FC<IUserCompetitionsSection> = () => {
  const history = useHistory();
  const [showNewCompetitionModal, setShowNewCompetitionModal] = useState(false);
  const { dashboardCompetitions } = useDashboardCompetitions();

  return (
    <BaseNeoCard className="m-2 align-items-center overflow-auto" height="10vh">
      <Row noGutters className="d-flex flex-column h-100 w-100">
        <span className="d-flex align-items-center h-100">
          <Button
            onClick={() => setShowNewCompetitionModal(true)}
            style={{ width: "50px", height: "50px" }}
          >
            +
          </Button>
        </span>
        {dashboardCompetitions &&
          dashboardCompetitions.map((competition) => (
            <span
              className="d-flex h-100 align-items-center mx-2"
              style={{ minWidth: "250px" }}
              key={competition.id}
            >
              <BaseNeoButton
                className="d-flex h-75 w-100 align-items-center mx-2"
                onClick={() => history.push(`/competition/${competition.id}`)}
              >
                {/* show icon if exists, else show unique color */}
                {/* TODO: let user select color if they want */}
                <Col
                  xs="3"
                  className="mr-3"
                  style={{
                    maxWidth: "50px",
                    height: "50px",
                    borderRadius: "2em",
                    backgroundColor: generateColor(competition.id),
                  }}
                ></Col>
                <Col xs="8" style={{ right: "0", height: "50px" }}>
                  <Row>{competition.name}</Row>
                  <Row>{competition.type}</Row>
                </Col>
              </BaseNeoButton>
            </span>
          ))}

        <NewCompetitionModal
          show={showNewCompetitionModal}
          setShow={setShowNewCompetitionModal}
        />
      </Row>
    </BaseNeoCard>
  );
};

export default UserCompetitionsSection;
