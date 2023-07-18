'use client';

import {
  FactionVotingBehaviour,
  Parliament,
  ParliamentVotingBehaviour,
} from '@/schema/schema';
import { countries } from 'country-data';
import { useState } from 'react';
import ApprovalBar from './approvalBar';
import FactionControlPanel from './factionControlPanel';
import { H1 } from './headings';
import VotingOverview from './votingOverview';

type Props = {
  initialParliament: Parliament;
};

export default function ParliamentSimulator({ initialParliament }: Props) {
  const [parliament, setParliament] = useState<Parliament>(initialParliament);

  return (
    <div className="w-full flex flex-col gap-16 mb-16">
      <div
        className="w-full"
        style={{
          backgroundImage: `url('/${parliament
            .getCountry()
            .alpha2.toLocaleLowerCase()}.jpg')`,
          height: '400px',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="flex flex-col container mx-auto gap-16 px-16">
        <div>
          <div className="text-xl text-stone-500">
            {parliament.getCountry().name} &gt;
          </div>
          <H1>{parliament.name}</H1>
        </div>
        <ApprovalBar parliament={parliament} />
        <div className="flex">
          <div className="w-1/2">
            <VotingOverview votingBehaviour={parliament.getVotingBehaviour()} />
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            {parliament.factions.map((faction) => (
              <FactionControlPanel
                key={faction.getName()}
                faction={faction}
                onUpdate={() => {
                  setParliament(
                    new Parliament(
                      parliament.name,
                      parliament.country.alpha2,
                      parliament.factions,
                    ),
                  );
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
