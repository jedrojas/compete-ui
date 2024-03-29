import './leaderboard-type-buttons.scss';

import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import BaseNeoButton from '../../bases/base-neo-button/base-neo-button';
import { useCompetitionState } from '../../pages/competition-page/competition-context';
import { ICompetitionType } from '../new-competition-modal/new-competition-modal';

export interface ILeaderboardTypeButtons {
  handleTypeButtonClick: (type: string) => void;
}

export const LeaderboardTypeButtons: React.FC<ILeaderboardTypeButtons> = ({
  handleTypeButtonClick,
}) => {
  const [isTeamPressed, setIsTeamPressed] = useState<boolean>(false);
  const [isAthletePressed, setIsAthletePressed] = useState<boolean>(true);
  const { type } = useCompetitionState();

  const handleClick = (type: string) => {
    switch (type) {
      case "team":
        setIsTeamPressed(true);
        setIsAthletePressed(false);
        break;
      case "athlete":
        setIsTeamPressed(false);
        setIsAthletePressed(true);
        break;
      default:
        setIsTeamPressed(false);
        setIsAthletePressed(false);
        break;
    }
    handleTypeButtonClick(type);
  };

  return (
    <Col xs="12" className="my-2">
      <Row noGutters>
        <Col xs="6">Leaderboard</Col>
        {type === ICompetitionType.TEAM && (
          <Col xs="6" className="d-flex flex-row font-size-12">
            <BaseNeoButton
              onClick={() => handleClick("team")}
              className="mx-2"
              pressed={isTeamPressed}
            >
              Team
            </BaseNeoButton>
            <BaseNeoButton
              onClick={() => handleClick("athlete")}
              className="ml-2"
              pressed={isAthletePressed}
            >
              Athlete
            </BaseNeoButton>
          </Col>
        )}
      </Row>
    </Col>
  );
};

export default LeaderboardTypeButtons;
