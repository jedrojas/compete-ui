import './leaderboard-type-buttons.scss';

import React from 'react';
import { Col, Row } from 'react-bootstrap';

import BaseNeoButton from '../../bases/base-neo-button/base-neo-button';

export interface ILeaderboardTypeButtons {
  handleTypeButtonClick: (type: string) => void;
}

export const LeaderboardTypeButtons: React.FC<ILeaderboardTypeButtons> = ({
  handleTypeButtonClick,
}) => {
  return (
    <Row noGutters>
      <Col xs="6">Leaderboard</Col>
      <Col xs="6" className="d-flex flex-row font-size-12">
        <BaseNeoButton
          onClick={() => handleTypeButtonClick("team")}
          className="mx-2"
        >
          Team
        </BaseNeoButton>
        <BaseNeoButton
          onClick={() => handleTypeButtonClick("athlete")}
          className="ml-2"
        >
          Athlete
        </BaseNeoButton>
      </Col>
    </Row>
  );
};

export default LeaderboardTypeButtons;
