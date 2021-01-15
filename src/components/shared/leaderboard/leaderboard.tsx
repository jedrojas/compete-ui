import './leaderboard.scss';

import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { ILeaderboardLI } from '../../../models.ts/data-models';
import LeaderboardLineItem from '../leaderboard-line-item/leaderboard-line-item';

export interface ILeaderboard {
  rows?: ILeaderboardLI[];
}

export const Leaderboard: React.FC<ILeaderboard> = ({ rows }) => {
  return (
    <Row>
      {rows
        ? rows.map((row, index) => (
            <Col xs="12" key={row.id}>
              <LeaderboardLineItem pos={index + 1} data={row} />
            </Col>
          ))
        : null}
    </Row>
  );
};

export default Leaderboard;
