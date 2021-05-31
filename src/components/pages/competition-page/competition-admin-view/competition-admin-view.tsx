import React from 'react';
import { Row } from 'react-bootstrap';

import { useCompetitionState } from '../competition-context';

export interface ICompetitionAdminView {}

export const CompetitionAdminView: React.FC<ICompetitionAdminView> = () => {
  const { isUserAdmin, isUserParticipant } = useCompetitionState();

  if (isUserAdmin) {
    return (
      <Row>
        {/* "View my stats" button -> takes user to participant view */}
        {/* Leaderboard (individual if individual, team/individual if team) */}
        {/* List of all activities */}
        {/* Time left in competition/ability to add/update start/end date */}
        {/* ability to other Add/Remove admins */}
        {/* ability to edit activity multipliers (r/b/s multipliers) */}
        {/* ability to approve/deny requests to join */}
        {/* ability to make competition public/private */}
        {/* ability to view all participants/teams */}
        {/* ability to send out invites/share link to competition */}
      </Row>
    );
  }

  return null;
};

export default CompetitionAdminView;
