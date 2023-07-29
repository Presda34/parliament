"use client";

import { Parliament, VotingMode } from "@/schema/schema";

type Props = {
    votingMode: VotingMode
    parliament: Parliament
    onUpdate: () => void;
}


export default function VotingModePill({ votingMode, parliament, onUpdate }: Props) {
    const colors = votingMode === parliament.getVotingMode() ? 'text-cyan-600 border-cyan-600' : 'text-gray-400 border-gray-400';

    return <button onClick={() => {
        parliament.setVotingMode(votingMode);
        onUpdate();
    }} className={`rounded-full px-3 py-1 border-2 ${colors}`}>{votingMode.name}</button>

}