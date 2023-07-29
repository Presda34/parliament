import { Parliament, ParliamentVotingBehaviour } from '@/schema/schema';

type Props = {
  parliament: Parliament;
};

export default function ApprovalBar({ parliament }: Props) {
  const totalVotes = parliament.getVotingMode().abstainIsNo ? parliament.getDeputies() : parliament.getNonAbstainingDeputies();
  return (
    <div className="flex w-full rounded-full overflow-hidden h-8 md:h-16 bg-stone-200">
      {parliament.factions.map((faction) => {
        return (
          <div
            key={faction.getName()}
            style={{
              backgroundColor: faction.getColor(),
              width: `${(100 * faction.getVotingBehaviour().yes) / totalVotes
                }%`,
            }}
            className="transition-all"
          ></div>
        );
      })}
    </div>
  );
}
