import './leaderboard-widget.scss';

import React, { useState } from 'react';
import { Col } from 'react-bootstrap';

import BaseWidget from '../../bases/base-widget/base-widget';
import { useLeaderboard } from '../../hooks/leaderboard-queries';
import LeaderboardTypeButtons from '../leaderboard-type-buttons/leaderboard-type-buttons';
import Leaderboard from '../leaderboard/leaderboard';

export interface ILeaderboardWidget {}

export const LeaderboardWidget: React.FC<ILeaderboardWidget> = () => {
  const [leaderboardType, setLeaderboardType] = useState("team");
  const { data } = useLeaderboard(leaderboardType);

  return (
    <BaseWidget>
      <BaseWidget.Header>
        <LeaderboardTypeButtons
          handleTypeButtonClick={(type) => setLeaderboardType(type)}
        />
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
