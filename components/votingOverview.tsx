import { ParliamentVotingBehaviour } from "@/schema/schema"
import { useEffect, useState } from "react";
import AnimatedNumber from "./animatedNumber";

type Props = {
  votingBehaviour: ParliamentVotingBehaviour
}


export default function VotingOverview({ votingBehaviour }: Props) {

  const yes = votingBehaviour.factions.map(faction => !Array.isArray(faction.votingBehaviour) ? faction.votingBehaviour.yes : faction.votingBehaviour.map(group => group.votingBehaviour.yes).reduce((a, b) => a + b)).reduce((a, b) => a + b);
  const no = votingBehaviour.factions.map(faction => !Array.isArray(faction.votingBehaviour) ? faction.votingBehaviour.no : faction.votingBehaviour.map(group => group.votingBehaviour.no).reduce((a, b) => a + b)).reduce((a, b) => a + b);
  const abstentions = votingBehaviour.factions.map(faction => !Array.isArray(faction.votingBehaviour) ? faction.votingBehaviour.abstentions : faction.votingBehaviour.map(group => group.votingBehaviour.abstentions).reduce((a, b) => a + b)).reduce((a, b) => a + b);


  return <div className="flex flex-col w-full justify-center items-center">
    <div className="text-4xl">
      <AnimatedNumber number={yes} /> / <AnimatedNumber number={abstentions} /> / <AnimatedNumber number={no} />
    </div>
    <div className="text-lg">
      Yes / Abstentions / No
    </div>
  </div>

}