import './leaderboard.scss';

import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { ILeaderboardLI } from '../../../models.ts/data-models';
import LeaderboardAthleteLineItem from '../leaderboard-athlete-line-item/leaderboard-athlete-line-item';
import LeaderboardTeamLineItem from '../leaderboard-team-line-item/leaderboard-team-line-item';

export interface ILeaderboard {
  rows: ILeaderboardLI[] | null;
  type: string;
}

export const Leaderboard: React.FC<ILeaderboard> = ({ rows, type }) => {
  const LeaderboardLineItem =
    type === "team" ? LeaderboardTeamLineItem : LeaderboardAthleteLineItem;

  return (
    <Row>
      {rows
        ? rows.map((row, index) => (
            <Col xs="12" key={`${row.id}:${index}`}>
              <LeaderboardLineItem pos={index + 1} data={row} />
            </Col>
          ))
        : null}
    </Row>
  );
};

export default Leaderboard;
