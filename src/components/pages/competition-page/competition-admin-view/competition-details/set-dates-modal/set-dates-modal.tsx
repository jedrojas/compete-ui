import './set-dates-modal.scss';

import { format } from 'date-fns';
import React, { useEffect, useMemo, useState } from 'react';
import { Button, Modal, Row } from 'react-bootstrap';
import { DateRange } from 'react-date-range';

import useUpdateCompetitionQuery from '../../../../../../queries/update-competition-query';
import BaseModal from '../../../../../shared/base-modal/base-modal';
import { useCompetitionState } from '../../../competition-context';

export interface ISetDatesModal {
  show: boolean;
  setShow: (val: boolean) => void;
}

export const SetDatesModal: React.FC<ISetDatesModal> = ({ show, setShow }) => {
  const { cid, name, type, start_date, end_date } = useCompetitionState();
  const { updateCompetitionQuery, loading } = useUpdateCompetitionQuery();

  const [startDate, setStartDate] = useState<Date>(
    start_date ? new Date(start_date) : new Date()
  );
  const [endDate, setEndDate] = useState<Date>(
    end_date ? new Date(end_date) : new Date()
  );

  const state = useMemo(
    () => [
      {
        startDate,
        endDate,
        key: "selection",
      },
    ],
    [endDate, startDate]
  );

  useEffect(() => {
    if (start_date) setStartDate(new Date(start_date));
    if (end_date) setEndDate(new Date(end_date));
  }, [end_date, start_date]);

  return (
    <BaseModal show={show} setShow={setShow}>
      <Modal.Header closeButton className="justify-content-center">
        <Modal.Title className="position-absolute" role="heading">
          Set competition dates
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="justify-content-center">
          <DateRange
            endDatePlaceholder={"End Date"}
            onChange={(item) => {
              setStartDate(item.selection.startDate);
              setEndDate(item.selection.endDate);
            }}
            moveRangeOnFirstSelection={false}
            ranges={state}
            minDate={new Date()}
          />
        </Row>
        <Row className="justify-content-center mt-3">
          <span>The competition will begin on</span>
          <span className="mx-2">
            <h3>{format(startDate, "MM/dd/yyyy")}</h3>
          </span>
          <span>and end on</span>
          <span className="mx-2">
            <h3>{format(endDate, "MM/dd/yyyy")}</h3>
          </span>
        </Row>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button
          title="Submit"
          className="cursor-pointer"
          onClick={() => {
            updateCompetitionQuery(cid, {
              type: type,
              name: name,
              start_date: startDate,
              end_date: endDate,
            });
            setTimeout(() => setShow(false), 1000);
          }}
        >
          Submit
        </Button>
      </Modal.Footer>
    </BaseModal>
  );
};

export default SetDatesModal;
