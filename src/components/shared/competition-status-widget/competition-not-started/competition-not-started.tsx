import './competition-not-started.scss';

import React from 'react';
import { Button, Row } from 'react-bootstrap';

import { CompetitionStatusComponentProps } from '../../../../models/data-models';
import { useModal } from '../../../hooks/modal-hooks';
import {
  SetDatesModal,
} from '../../../pages/competition-page/competition-admin-view/competition-timer/set-dates-modal/set-dates-modal';
import { useCompetitionState } from '../../../pages/competition-page/competition-context';
import { formatDate } from '../../../utils/date-formatter';

export const CompetitionNotStarted: React.FC<CompetitionStatusComponentProps> = ({
  isAdminPage,
}) => {
  const { start_date, end_date, isUserAdmin } = useCompetitionState();
  const [show, setShow] = useModal();

  return (
    <>
      <Row noGutters className="d-flex flex-column">
        <Row noGutters>{`Competition starts: ${formatDate(start_date!)}`}</Row>
        <Row noGutters>{`Competition ends: ${formatDate(end_date!)}`}</Row>

        <Row noGutters>
          {isAdminPage && isUserAdmin && (
            <Button onClick={() => setShow(true)}>
              Update competition start date and end date
            </Button>
          )}
          <SetDatesModal show={show} setShow={setShow} />
        </Row>
      </Row>
    </>
  );
};

export default CompetitionNotStarted;
