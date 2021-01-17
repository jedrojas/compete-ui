import './leaderboard-widget.scss';

import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';

import { ILeaderboardLI } from '../../../models.ts/data-models';
import BaseWidget from '../../bases/base-widget/base-widget';
import { getLeaderboard } from '../../hooks/leaderboard-query-hooks';
import LeaderboardTypeButtons from '../leaderboard-type-buttons/leaderboard-type-buttons';
import Leaderboard from '../leaderboard/leaderboard';

export interface ILeaderboardWidget {}

export const LeaderboardWidget: React.FC<ILeaderboardWidget> = () => {
  const [data, setData] = useState<ILeaderboardLI[]>();
  const [leaderboardType, setLeaderboardType] = useState("team");

  useEffect(() => {
    getLeaderboard(leaderboardType)
      .then((data) => {
        setData(data);
      })
      .catch((e) => console.log("Error:", e));
  }, [leaderboardType]);

  return (
    <BaseWidget>
      <BaseWidget.Header>
        <Col xs="12" className="my-2">
          <LeaderboardTypeButtons
            handleTypeButtonClick={(type) => setLeaderboardType(type)}
          />
        </Col>
      </BaseWidget.Header>
      <BaseWidget.Body>
        <Col xs="12">
          <Leaderboard rows={data} type={leaderboardType} />
        </Col>
      </BaseWidget.Body>
    </BaseWidget>
  );
};

export default LeaderboardWidget;
