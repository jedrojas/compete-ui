import './find-competition-step.scss';

import React from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { NewCompetitionStepProps } from '../../../../models/data-models';
import BaseNeoButton from '../../../bases/base-neo-button/base-neo-button';
import { useJoinableCompetitionsQuery } from '../../../hooks/competition-hooks';
import { generateColor } from '../../../utils/generate-color';

export const FindCompetitionStep: React.FC<NewCompetitionStepProps> = () => {
  const history = useHistory();
  const { data } = useJoinableCompetitionsQuery();

  return (
    <>
      <Modal.Header closeButton className="justify-content-center">
        <Modal.Title className="position-absolute">
          Find Competition
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {data &&
          data.map((competition) => (
            <span key={competition.id}>
              <BaseNeoButton
                className="d-flex h-75 w-100 align-items-center mx-2"
                style={competition.is_joined ? { opacity: ".5" } : null}
                onClick={() => history.push(`/competitions/${competition.id}`)}
              >
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
      </Modal.Body>
    </>
  );
};

export default FindCompetitionStep;
