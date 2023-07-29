import { Parliament, ParliamentVotingBehaviour, VotingBehaviour } from '@/schema/schema';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import AnimatedNumber from './animatedNumber';
import VotingModePill from './votingModePill';

type Props = {
  votingBehaviour: VotingBehaviour;
  parliament: Parliament;
  onUpdate: () => void;
};

export default function VotingOverview({ votingBehaviour, parliament, onUpdate }: Props) {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-2">
      <div className="flex gap-2">
        {parliament.getVotingModes().map(votingMode => <VotingModePill parliament={parliament} votingMode={votingMode} onUpdate={onUpdate} />)}
      </div>
      {(votingBehaviour.yes / (votingBehaviour.no + votingBehaviour.yes)) >= parliament.getVotingMode().threshold ? <AiOutlineCheckCircle size={96} className="text-green-600" /> : <AiOutlineCloseCircle size={96} className="text-red-600" />}
      <div className="text-2xl md:text-4xl">
        <AnimatedNumber number={votingBehaviour.yes} /> /{' '}
        <AnimatedNumber number={votingBehaviour.abstentions} /> /{' '}
        <AnimatedNumber number={votingBehaviour.no} />
      </div>
      <div className="text-lg">Yes / Abstentions / No</div>
    </div>
  );
}
