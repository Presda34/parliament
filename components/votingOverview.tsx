import { ParliamentVotingBehaviour, VotingBehaviour } from '@/schema/schema';
import { useEffect, useState } from 'react';
import AnimatedNumber from './animatedNumber';

type Props = {
  votingBehaviour: VotingBehaviour;
};

export default function VotingOverview({ votingBehaviour }: Props) {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="text-4xl">
        <AnimatedNumber number={votingBehaviour.yes} /> /{' '}
        <AnimatedNumber number={votingBehaviour.abstentions} /> /{' '}
        <AnimatedNumber number={votingBehaviour.no} />
      </div>
      <div className="text-lg">Yes / Abstentions / No</div>
    </div>
  );
}
