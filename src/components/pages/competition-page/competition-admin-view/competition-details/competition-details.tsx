import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';

import BaseWidget from '../../../../bases/base-widget/base-widget';
import { useCompetitionStatusComponent } from '../../../../shared/competition-status-widget/hooks';
import { useCompetitionState } from '../../competition-context';
import UpdateCompetitionModal from './update-competition-modal/update-competition-modal';

export interface ICompetitionDetails {}

export const CompetitionDetails: React.FC<ICompetitionDetails> = () => {
  const StatusComponent = useCompetitionStatusComponent();
  const { name, type } = useCompetitionState();
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  return (
    <>
      <BaseWidget>
        <BaseWidget.Header>
          <span className="m-2">Details</span>
        </BaseWidget.Header>
        <BaseWidget.Body>
          <Row noGutters className="m-2">
            {`Competition name: ${name}`}
          </Row>

          <Row noGutters className="m-2">
            {`Competition type: ${type}`}
          </Row>

          <Row noGutters className="m-2">
            <StatusComponent />
          </Row>

          <Button onClick={() => setShowUpdateModal(true)} className="m-2">
            Update
          </Button>
        </BaseWidget.Body>
      </BaseWidget>

      <UpdateCompetitionModal
        show={showUpdateModal}
        setShow={setShowUpdateModal}
      />
    </>
  );
};

export default CompetitionDetails;
