import './dates-not-set.scss';

import React from 'react';
import { Button, Row } from 'react-bootstrap';

import { CompetitionStatusComponentProps } from '../../../../models/data-models';
import { useModal } from '../../../hooks/modal-hooks';
import {
  SetDatesModal,
} from '../../../pages/competition-page/competition-admin-view/competition-timer/set-dates-modal/set-dates-modal';
import { useCompetitionState } from '../../../pages/competition-page/competition-context';

export const DatesNotSet: React.FC<CompetitionStatusComponentProps> = ({
  isAdminPage,
}) => {
  const [show, setShow] = useModal();
  const { isUserAdmin } = useCompetitionState();

  return (
    <>
      <Row>
        <Row noGutters>Competition dates not set</Row>
        {isUserAdmin && isAdminPage && (
          <Button onClick={() => setShow(true)}>
            Set competition start date and end date
          </Button>
        )}
      </Row>

      <SetDatesModal show={show} setShow={setShow} />
    </>
  );
};

export default DatesNotSet;
