'use client';

import {
  FactionVotingBehaviour,
  Group,
  GroupedFaction,
  MemberFaction,
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
  parliamentData: { country: string; name: string; factions: ({ name: string; color: string; deputies: number; } | { name: string; color: string; deputies: { name: string; deputies: number; }[]; })[]; };
};

export default function ParliamentSimulator({ parliamentData }: Props) {
  const initialParliament = new Parliament(
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
  const [parliament, setParliament] = useState<Parliament>(new Parliament(initialParliament.name, initialParliament.country.alpha2, initialParliament.factions));

  return (
    <div className="w-full flex flex-col gap-6 md:gap-16 mb-16">
      <div
        className="w-full h-48 md:h-96"
        style={{
          backgroundImage: `url('/${parliament
            .getCountry()
            .alpha2.toLocaleLowerCase()}.jpg')`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="flex flex-col container mx-auto gap-6 md:gap-16 px-3 md:px-16">
        <div>
          <div className="text-xl text-stone-500">
            {parliament.getCountry().name} &gt;
          </div>
          <H1>{parliament.name}</H1>
        </div>
        <ApprovalBar parliament={parliament} />
        <div className="flex flex-wrap gap-y-6 md:gap-y-0">
          <div className="w-full md:w-2/5">
            <VotingOverview votingBehaviour={parliament.getVotingBehaviour()} />
          </div>
          <div className="w-full md:w-3/5 flex flex-col gap-4">
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
