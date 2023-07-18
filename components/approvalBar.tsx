import { Parliament, ParliamentVotingBehaviour } from "@/schema/schema";

type Props = {
  votingBehaviour: ParliamentVotingBehaviour
}

export default function ApprovalBar({ votingBehaviour }: Props) {
  const totalVotes = votingBehaviour.factions.map(faction => !Array.isArray(faction.votingBehaviour) ? faction.votingBehaviour.yes + faction.votingBehaviour.no : faction.votingBehaviour.map(group => group.votingBehaviour.yes + group.votingBehaviour.no).reduce((a, b) => a + b)).reduce((a, b) => a + b);
  return <div className="flex w-full rounded-full overflow-hidden h-16 bg-stone-200">
    {votingBehaviour.factions.map(faction => {
      const deputies = !Array.isArray(faction.votingBehaviour) ? faction.votingBehaviour.yes : faction.votingBehaviour.map(group => group.votingBehaviour.yes).reduce((a, b) => a + b);
      return (<div style={{ backgroundColor: faction.color, width: `${100 * deputies / totalVotes}%` }} className="transition-all"></div>);
    })}
  </div>
}