"use client";

import { FactionVotingBehaviour, Parliament, ParliamentVotingBehaviour } from "@/schema/schema";
import { countries } from "country-data";
import { useState } from "react";
import ApprovalBar from "./approvalBar";
import FactionControlPanel from "./factionControlPanel";
import { H1 } from "./headings";
import VotingOverview from "./votingOverview";

type Props = {
  parliamentInformation: Parliament
}

export default function ParliamentSimulator({ parliamentInformation }: Props) {

  const [votingBehaviour, setVotingBehaviour] = useState<ParliamentVotingBehaviour>({
    name: parliamentInformation.name, factions: parliamentInformation.factions.map((faction, i) => {
      if (typeof faction.deputies === 'number') {
        return {
          name: faction.name,
          index: i,
          color: faction.color,
          votingBehaviour: {
            yes: 0,
            abstentions: 0,
            no: faction.deputies
          }
        }
      } else {
        return {
          name: faction.name,
          color: faction.color,
          index: i,
          votingBehaviour: faction.deputies.map(group => ({
            name: group.name,
            votingBehaviour: {
              yes: 0,
              abstentions: 0,
              no: group.deputies
            }
          }))
        }
      }
    })
  })


  return <div className="w-full flex flex-col gap-16 mb-16">
    <div className="w-full" style={{ backgroundImage: `url('/${parliamentInformation.country}.jpg')`, height: '400px', backgroundPosition: 'center center', backgroundSize: 'cover' }}>
    </div>
    <div className="flex flex-col container mx-auto gap-16 px-16">
      <div>
        <div className="text-xl text-stone-500">
          {countries[parliamentInformation.country.toLocaleUpperCase()].name} &gt;
        </div>
        <H1>{parliamentInformation.name}</H1>
      </div>
      <ApprovalBar votingBehaviour={votingBehaviour} />
      <div className="flex">
        <div className="w-1/2">
          <VotingOverview votingBehaviour={votingBehaviour} />
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          {votingBehaviour.factions.map(factionVotingBehaviour => <FactionControlPanel faction={parliamentInformation.factions.find(faction => factionVotingBehaviour.name === faction.name)} votingBehaviour={factionVotingBehaviour} setVotingBehaviour={(factionVotingBehaviour: FactionVotingBehaviour) => {
            const votingBehaviourWithoutFaction = votingBehaviour.factions.filter(faction => faction.name !== factionVotingBehaviour.name)
            setVotingBehaviour({
              name: votingBehaviour.name,
              factions: [...votingBehaviourWithoutFaction, factionVotingBehaviour].sort((a, b) => a.index - b.index)
            })
          }} />)}
        </div>
      </div>
    </div>
  </div>
}