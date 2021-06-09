import './leaderboard-team-line-item.scss';

import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

import monstarsImg from '../../../assets/Monstars.jpg';
import { ILeaderboardLI } from '../../../models/data-models';

export interface ILeaderboardTeamLineItem {
  data: ILeaderboardLI;
  pos: number;
}

export const LeaderboardTeamLineItem: React.FC<ILeaderboardTeamLineItem> = ({
  data,
  pos,
}) => {
  return (
    <Row className="leaderboard-li font-montserrat align-items-center my-2">
      <Col xs="1">{pos}</Col>
      {/* <Col xs="2">
        <img src={monstarsImg} alt="imgg" height={"35px"} width={"35px"} />
      </Col> */}
      <Col xs="8">{data.name}</Col>
      <Col xs="3" className="d-flex justify-content-end">
        {data.points}
        <FontAwesomeIcon icon={faCaretUp} className="my-auto ml-2" />
      </Col>
    </Row>
  );
};

export default LeaderboardTeamLineItem;
