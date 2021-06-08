import './create-team-modal.scss';

import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Button, Modal, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import useCreateTeamQuery from '../../../../queries/create-team-query';
import useJoinTeamQuery from '../../../../queries/join-team-query';
import { useCompetitionState } from '../../../pages/competition-page/competition-context';
import BaseModal from '../../base-modal/base-modal';

export interface ICreateTeamModal {
  show: boolean;
  setShow: (val: boolean) => void;
}

export const CreateTeamModal: React.FC<ICreateTeamModal> = ({
  show,
  setShow,
}) => {
  const { register, watch } = useForm();
  const [charsUsed, setCharsUsed] = useState(0);
  const createTeamQuery = useCreateTeamQuery();
  const joinTeamQuery = useJoinTeamQuery();
  const { cid } = useCompetitionState();

  useEffect(() => setCharsUsed(watch("teamName")?.length ?? 0), [watch]);

  return (
    <BaseModal show={show} setShow={setShow}>
      <Modal.Header closeButton className="justify-content-center">
        <Modal.Title className="position-absolute" role="heading">
          Create a Team
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor="team-name">Enter a team name *</label>
        <input
          id="team-name"
          name="teamName"
          placeholder="Team Name"
          ref={register({ required: true, maxLength: 40 })}
          className="w-100 form-text-field my-2"
        />
        <Row noGutters>
          <span
            title="Characters Used"
            className={classnames({ "text-danger": charsUsed > 40 })}
          >{`${charsUsed} / 40`}</span>
        </Row>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button
          title="Submit"
          className="cursor-pointer"
          onClick={() => {
            createTeamQuery({ name: watch("teamName"), cid }).then((team) =>
              joinTeamQuery({ tid: team.id })
            );
            setTimeout(() => setShow(false), 1000);
          }}
          disabled={watch("teamName") === ""}
        >
          Submit
        </Button>
      </Modal.Footer>
    </BaseModal>
  );
};

export default CreateTeamModal;
