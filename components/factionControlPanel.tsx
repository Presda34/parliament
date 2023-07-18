"use client"

import { Faction, FactionVotingBehaviour, FactionVotingBehaviourSetter } from "@/schema/schema"
import { FiThumbsUp, FiCircle, FiThumbsDown } from "react-icons/fi"

type Props = {
  faction: Faction,
  votingBehaviour: FactionVotingBehaviour,
  setVotingBehaviour: FactionVotingBehaviourSetter
}

export default function FactionControlPanel({ faction, votingBehaviour, setVotingBehaviour }: Props) {
  return <div className="flex border-2 justify-between rounded-lg p-4">
    <div className="flex gap-4 items-center">
      <div className="rounded-full w-4 h-4" style={{ backgroundColor: faction.color }}></div>
      {faction.name}
    </div>
    <div className="flex gap-2">
      <button onClick={
        () => setVotingBehaviour(
          {
            name: votingBehaviour.name,
            color: votingBehaviour.color,
            index: votingBehaviour.index,
            votingBehaviour: typeof faction.deputies === 'number' ? { yes: faction.deputies, abstentions: 0, no: 0 } : faction.deputies.map(group => ({ name: group.name, votingBehaviour: { yes: group.deputies, abstentions: 0, no: 0 } }))
          })}><FiThumbsUp className="hover:stroke-green-600" /></button>
      <button onClick={
        () => setVotingBehaviour(
          {
            name: votingBehaviour.name,
            color: votingBehaviour.color,
            index: votingBehaviour.index,
            votingBehaviour: typeof faction.deputies === 'number' ? { yes: 0, abstentions: faction.deputies, no: 0 } : faction.deputies.map(group => ({ name: group.name, votingBehaviour: { yes: 0, abstentions: group.deputies, no: 0 } }))
          })}><FiCircle className="hover:stroke-yellow-600" /></button>
      <button onClick={
        () => setVotingBehaviour(
          {
            name: votingBehaviour.name,
            color: votingBehaviour.color,
            index: votingBehaviour.index,
            votingBehaviour: typeof faction.deputies === 'number' ? { yes: 0, abstentions: 0, no: faction.deputies } : faction.deputies.map(group => ({ name: group.name, votingBehaviour: { yes: 0, abstentions: 0, no: group.deputies } }))
          })}><FiThumbsDown className="hover:stroke-red-600" /></button>
    </div>
  </div >
}