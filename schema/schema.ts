export type Parliament = {
  name: string
  country: string
  factions: Faction[]
  pollTypes: PollType[]
}

export type ParliamentVotingBehaviour = {
  name: string
  factions: FactionVotingBehaviour[]
}

export type Faction = {
  name: string
  color: string
  deputies: number | Group[]
}

export type FactionVotingBehaviour = {
  name: string
  index: number
  color: string
  votingBehaviour : VotingBehaviour | GroupVotingBehaviour[]
}

export type Group = {
  name: string
  deputies: number
}

export type GroupVotingBehaviour = {
  name: string
  votingBehaviour: VotingBehaviour 
}

export type VotingBehaviour = {
  yes: number
  abstentions: number
  no: number
}

export type FactionVotingBehaviourSetter = (votingBehaviour: FactionVotingBehaviour) => void

export type PollType = {
  name: string
  participationThreshold: number
  passThreshold: number
  abstentionIsNo: boolean
}