import React from 'react';
import { Row } from 'react-bootstrap';

import LeaderboardWidget from '../../../shared/leaderboard-widget/leaderboard-widget';
import ParticipantWidget from '../../../shared/participant-widget/participant-widget';
import { useCompetitionState } from '../competition-context';
import AdminParticipantWidget from './admin-participant-widget/admin-participant-widget';
import CompetitionTimer from './competition-timer/competition-timer';

export interface ICompetitionAdminView {}

export const CompetitionAdminView: React.FC<ICompetitionAdminView> = () => {
  const { name, isUserAdmin } = useCompetitionState();

  return isUserAdmin ? (
    <Row>
      <Row as="h1" noGutters className="m-3">
        {name}
      </Row>
      <CompetitionTimer />
      <AdminParticipantWidget />
      <LeaderboardWidget />
      <ParticipantWidget />
    </Row>
  ) : null;
};

// {/* (done) Competitle Title */}
// {/* (done) ability to add/update start/end date */}
// {/* (done) "View my stats" button -> takes user to participant view */}
// {/* (done) "Join as participant" button -> allows admin to join as participant */}
// {/* (current) ability to view all participants/teams */}
// {/* ability to approve/deny requests to join */}
// {/* ability to make competition public/private */}
// {/* ability to send out invites/share link to competition */}
// {/* Leaderboard (individual if individual, team/individual if team) */}
// {/* List of all activities */}
// {/* View time left in competition/ */}
// {/* (deprio) ability to other Add/Remove admins */}
// {/* (deprio) ability to edit activity multipliers (r/b/s multipliers) */}

export default CompetitionAdminView;
