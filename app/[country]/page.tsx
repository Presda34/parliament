import ApprovalBar from '@/components/approvalBar';
import FactionControlPanel from '@/components/factionControlPanel';
import { H1 } from '@/components/headings';
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
import { countries } from 'country-data';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import { parliamentInformation } from '../parlamentInformation';

type Props = {
  params: {
    country: string;
  };
};


export async function generateMetadata(
  { params }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const parliamentData = parliamentInformation.find(
    (parliament) => parliament.country === params.country,
  );
  return {
    title: `${parliamentData?.name} - Parliament Simulator`,
    description: 'Parliament Simulator aims to give you the opportunity to simulate parliament votings for many parliaments throughout the world. You can play through different scenarios by choosing which parliamentary faction or group votes which way and therefore easily check if a certain legislature is likely to pass or not.',
  }
}

export default function DE({ params }: Props) {
  const parliamentData = parliamentInformation.find(
    (parliament) => parliament.country === params.country,
  );
  if (!parliamentData) return notFound()

  return <ParliamentSimulator parliamentData={parliamentData} />;
}
