import './leaderboard.scss';

import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { ILeaderboardLI } from '../../../models/data-models';
import LeaderboardAthleteLineItem from '../leaderboard-athlete-line-item/leaderboard-athlete-line-item';
import LeaderboardTeamLineItem from '../leaderboard-team-line-item/leaderboard-team-line-item';

export interface ILeaderboard {
  rows: ILeaderboardLI[] | null;
  type: string;
}

export const Leaderboard: React.FC<ILeaderboard> = ({ rows, type }) => {
  return type === "team" ? (
    <Row>
      {rows?.length
        ? rows.map((row, index) => (
            <Col xs="12" key={`${row.id}:${index}`}>
              <LeaderboardTeamLineItem pos={index + 1} data={row} />
            </Col>
          ))
        : <Col>No teams have joined yet!</Col>}
    </Row>
  ) : (
    <Row>
      {rows?.length
        ? rows.map((row, index) => (
            <Col xs="12" key={`${row.id}:${index}`}>
              <LeaderboardAthleteLineItem pos={index + 1} data={row} />
            </Col>
          ))
        : <Col>No participants have joined yet!</Col>}
    </Row>
  );
};

export default Leaderboard;
