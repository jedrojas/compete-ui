import './find-competition-modal.scss';

import React from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import BaseNeoButton from '../../bases/base-neo-button/base-neo-button';
import { useJoinableCompetitionsQuery } from '../../hooks/competition-hooks';
import { generateColor } from '../../utils/generate-color';
import BaseModal from '../base-modal/base-modal';

export interface IFindCompetitionModal {
  show: boolean;
  setShow: (val: boolean) => void;
}

export const FindCompetitionModal: React.FC<IFindCompetitionModal> = ({
  show,
  setShow,
}) => {
  const history = useHistory();
  const { data } = useJoinableCompetitionsQuery();

  return (
    <BaseModal show={show} setShow={setShow}>
      <Modal.Header closeButton className="justify-content-center">
        <Modal.Title className="position-absolute" role="heading">
          Find Existing Competition
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {data &&
          data.map((competition) => (
            <span key={competition.id}>
              <BaseNeoButton
                className="d-flex h-75 w-100 align-items-center mx-2"
                onClick={() => history.push(`/competition/${competition.id}`)}
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
                />
                <Col xs="8" style={{ right: "0", height: "50px" }}>
                  <Row>
                    {competition.name}
                    {competition.is_joined ? (
                      <span className="ml-2">{`(joined)`}</span>
                    ) : null}
                  </Row>
                  <Row>{competition.type}</Row>
                </Col>
              </BaseNeoButton>
            </span>
          ))}
      </Modal.Body>
    </BaseModal>
  );
};

export default FindCompetitionModal;
