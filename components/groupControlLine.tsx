import { Group } from '@/schema/schema';
import { FiThumbsUp, FiCircle, FiThumbsDown } from 'react-icons/fi';

type Props = {
  group: Group;
  onUpdate: () => void;
};

export default function GroupControlLine({ group, onUpdate }: Props) {
  function updateVotingBehaviour(state: 'yes' | 'abstention' | 'no') {
    group.setVotingBehaviour({
      yes: state === 'yes' ? group.getDeputies() : 0,
      abstentions: state === 'abstention' ? group.getDeputies() : 0,
      no: state === 'no' ? group.getDeputies() : 0,
    });
    onUpdate();
  }
  return (
    <div className="flex  justify-between">
      <div className="flex gap-4 items-center">
        <div className="rounded-full w-4 h-4"></div>
        <div class="w-full">{group.getName()}</div>
      </div>
      <div className="flex gap-2">
        <button onClick={() => updateVotingBehaviour('yes')}>
          <FiThumbsUp
            className={`hover:stroke-green-600 ${group.getVotingBehaviour().yes === group.getDeputies() &&
              'stroke-green-600'
              }`}
          />
        </button>
        <button onClick={() => updateVotingBehaviour('abstention')}>
          <FiCircle
            className={`hover:stroke-yellow-600 ${group.getVotingBehaviour().abstentions === group.getDeputies() &&
              'stroke-yellow-600'
              }`}
          />
        </button>
        <button onClick={() => updateVotingBehaviour('no')}>
          <FiThumbsDown
            className={`hover:stroke-red-600 ${group.getVotingBehaviour().no === group.getDeputies() &&
              'stroke-red-600'
              }`}
          />
        </button>
      </div>
    </div>
  );
}
