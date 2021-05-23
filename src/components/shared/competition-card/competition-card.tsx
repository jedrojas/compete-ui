import './competition-card.scss';

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { ICompetition } from '../../../models/data-models';
import NeoButton from '../../bases/neo-button/neo-button';
import TimeLeft from '../time-left/time-left';

export interface ICompetitionCard {
  competition: ICompetition;
}

export const CompetitionCard: React.FC<ICompetitionCard> = ({
  competition,
}) => {
  return (
    <Link to={`/competitions/${competition.id}`}>
      <NeoButton className="my-3" height="85px">
        <Row className="w-100">
          <Col xs="3" className="ml-4 my-auto">
            <h4>{competition.name}</h4>
          </Col>
          <Col xs="3" className="ml-4 my-auto">
            <TimeLeft
              start_date={competition.start_date}
              end_date={competition.end_date}
            />
          </Col>
        </Row>
      </NeoButton>
    </Link>
  );
};

export default CompetitionCard;
