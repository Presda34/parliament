import { ParliamentVotingBehaviour, VotingBehaviour } from '@/schema/schema';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import AnimatedNumber from './animatedNumber';

type Props = {
  votingBehaviour: VotingBehaviour;
};

export default function VotingOverview({ votingBehaviour }: Props) {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-2">
      {votingBehaviour.yes > votingBehaviour.no ? <AiOutlineCheckCircle size={96} className="text-green-600" /> : <AiOutlineCloseCircle size={96} className="text-red-600" />}
      <div className="text-2xl md:text-4xl">
        <AnimatedNumber number={votingBehaviour.yes} /> /{' '}
        <AnimatedNumber number={votingBehaviour.abstentions} /> /{' '}
        <AnimatedNumber number={votingBehaviour.no} />
      </div>
      <div className="text-lg">Yes / Abstentions / No</div>
    </div>
  );
}
