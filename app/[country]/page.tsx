'use client';

import ApprovalBar from '@/components/approvalBar';
import FactionControlPanel from '@/components/factionControlPanel';
import ParliamentSimulator from '@/components/parliamentSimulator';
import VotingOverview from '@/components/votingOverview';
import {
  FactionVotingBehaviour,
  Group,
  GroupedFaction,
  MemberFaction,
  Parliament,
  ParliamentVotingBehaviour,
} from '@/schema/schema';
import { useState } from 'react';
import { parliamentInformation } from '../parlamentInformation';

type Props = {
  params: {
    country: string;
  };
};

export default function DE({ params }: Props) {
  const parliamentData = parliamentInformation.find(
    (parliament) => parliament.country === params.country,
  );
  if (!parliamentData) return 'Error!';
  const parliament = new Parliament(
    parliamentData.name,
    parliamentData.country,
    parliamentData.factions.map((factionData) => {
      if (Array.isArray(factionData.deputies)) {
        return new GroupedFaction(
          factionData.name,
          factionData.color,
          factionData.deputies.map((groupData) => {
            return new Group(groupData.name, groupData.deputies);
          }),
        );
      } else {
        return new MemberFaction(
          factionData.name,
          factionData.color,
          factionData.deputies,
        );
      }
    }),
  );

  return <ParliamentSimulator initialParliament={parliament} />;
}
