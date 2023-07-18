'use client';

import { Faction, GroupedFaction, MemberFaction } from '@/schema/schema';
import { Lato } from 'next/font/google';
import { FiThumbsUp, FiCircle, FiThumbsDown } from 'react-icons/fi';
import GroupControlLine from './groupControlLine';

type Props = {
  faction: Faction;
  onUpdate: () => void;
};

const latoBold = Lato({ subsets: ['latin'], weight: '700' });

export default function FactionControlPanel({ faction, onUpdate }: Props) {
  function updateVotingBehaviour(state: 'yes' | 'abstention' | 'no') {
    if (faction instanceof MemberFaction) {
      faction.setVotingBehaviour({
        yes: state === 'yes' ? faction.getDeputies() : 0,
        abstentions: state === 'abstention' ? faction.getDeputies() : 0,
        no: state === 'no' ? faction.getDeputies() : 0,
      });
    } else if (faction instanceof GroupedFaction) {
      faction.getGroups().forEach((group) =>
        group.setVotingBehaviour({
          yes: state === 'yes' ? group.getDeputies() : 0,
          abstentions: state === 'abstention' ? group.getDeputies() : 0,
          no: state === 'no' ? group.getDeputies() : 0,
        }),
      );
    }
    onUpdate();
  }

  return (
    <div className="flex border-2 flex-col p-4 rounded-lg gap-2">
      <div className="flex  justify-between">
        <div className="flex gap-4 items-center">
          <div
            className="rounded-full w-4 h-4"
            style={{ backgroundColor: faction.getColor() }}
          ></div>
          <div className={latoBold.className}>{faction.getName()}</div>
        </div>
        <div className="flex gap-2">
          <button onClick={() => updateVotingBehaviour('yes')}>
            <FiThumbsUp
              className={`hover:stroke-green-600 ${
                faction.getVotingBehaviour().yes === faction.getDeputies() &&
                'stroke-green-600'
              }`}
            />
          </button>
          <button onClick={() => updateVotingBehaviour('abstention')}>
            <FiCircle
              className={`hover:stroke-yellow-600 ${
                faction.getVotingBehaviour().abstentions ===
                  faction.getDeputies() && 'stroke-yellow-600'
              }`}
            />
          </button>
          <button onClick={() => updateVotingBehaviour('no')}>
            <FiThumbsDown
              className={`hover:stroke-red-600 ${
                faction.getVotingBehaviour().no === faction.getDeputies() &&
                'stroke-red-600'
              }`}
            />
          </button>
        </div>
      </div>
      {faction instanceof GroupedFaction &&
        faction
          .getGroups()
          .map((group) => (
            <GroupControlLine
              key={group.getName()}
              group={group}
              onUpdate={onUpdate}
            />
          ))}
    </div>
  );
}
