import { Country, countries } from 'country-data';

export class Parliament {
  name: string;
  country: Country;
  factions: Faction[];

  constructor(name: string, country: string, factions: Faction[]) {
    this.name = name;
    this.country = countries[country.toLocaleUpperCase()];
    this.factions = factions;
  }

  getName(): string {
    return this.name;
  }

  getCountry(): Country {
    return this.country;
  }

  getDeputies(): number {
    return this.factions
      .map((faction) => faction.getDeputies())
      .reduce((a, b) => a + b);
  }

  getNonAbstainingDeputies(): number {
    return this.factions
      .map((faction) => faction.getNonAbstainingDeputies())
      .reduce((a, b) => a + b);
  }

  getVotingBehaviour(): VotingBehaviour {
    return this.factions
      .map((faction) => faction.getVotingBehaviour())
      .reduce((a, b) => ({
        yes: a.yes + b.yes,
        abstentions: a.abstentions + b.abstentions,
        no: a.no + b.no,
      }));
  }

  getFactionByName(name: string): Faction {
    const faction = this.factions.find((faction) => faction.getName() === name);
    if (!faction) throw 'FactionNotFoundError';
    return faction;
  }
}

export interface Faction {
  getName(): string;
  getColor(): string;
  getVotingBehaviour(): VotingBehaviour;
  getDeputies(): number;
  getNonAbstainingDeputies(): number;
}

export class MemberFaction implements Faction {
  name: string;
  color: string;
  deputies: number;
  votingBehaviour: VotingBehaviour;
  constructor(name: string, color: string, deputies: number) {
    this.name = name;
    this.color = color;
    this.deputies = deputies;
    this.votingBehaviour = {
      yes: 0,
      abstentions: 0,
      no: deputies,
    };
  }
  getColor(): string {
    return this.color;
  }
  getName(): string {
    return this.name;
  }
  getVotingBehaviour(): VotingBehaviour {
    return this.votingBehaviour;
  }
  setVotingBehaviour(votingBehaviour: VotingBehaviour) {
    if (
      votingBehaviour.yes + votingBehaviour.abstentions + votingBehaviour.no !==
      this.deputies
    )
      throw 'IllegalStateException';
    this.votingBehaviour = votingBehaviour;
  }
  getDeputies(): number {
    return this.deputies;
  }
  getNonAbstainingDeputies(): number {
    return this.votingBehaviour.yes + this.votingBehaviour.no;
  }
}

export class GroupedFaction implements Faction {
  name: string;
  color: string;
  groups: Group[];

  constructor(name: string, color: string, groups: Group[]) {
    this.name = name;
    this.color = color;
    this.groups = groups;
  }
  getName(): string {
    return this.name;
  }
  getColor(): string {
    return this.color;
  }
  getVotingBehaviour(): VotingBehaviour {
    return this.groups
      .map((group) => group.getVotingBehaviour())
      .reduce((a, b) => ({
        yes: a.yes + b.yes,
        abstentions: a.abstentions + b.abstentions,
        no: a.no + b.no,
      }));
  }
  getDeputies(): number {
    return this.groups
      .map((group) => group.getDeputies())
      .reduce((a, b) => a + b);
  }
  getNonAbstainingDeputies(): number {
    return this.groups
      .map((group) => group.getNonAbstainingDeputies())
      .reduce((a, b) => a + b);
  }

  getGroups(): Group[] {
    return this.groups;
  }
}

export class Group {
  name: string;
  deputies: number;
  votingBehaviour: VotingBehaviour;

  constructor(name: string, deputies: number) {
    this.name = name;
    this.deputies = deputies;
    this.votingBehaviour = {
      yes: 0,
      abstentions: 0,
      no: deputies,
    };
  }
  getName(): string {
    return this.name;
  }
  setVotingBehaviour(votingBehaviour: VotingBehaviour) {
    if (
      votingBehaviour.yes + votingBehaviour.abstentions + votingBehaviour.no !==
      this.deputies
    )
      throw 'IllegalStateException';
    this.votingBehaviour = votingBehaviour;
  }

  getVotingBehaviour(): VotingBehaviour {
    return this.votingBehaviour;
  }
  getDeputies(): number {
    return this.deputies;
  }
  getNonAbstainingDeputies(): number {
    return this.votingBehaviour.yes + this.votingBehaviour.no;
  }
}

// export type Parliament = {
// name: string
// country: string
// factions: Faction[]
// pollTypes: PollType[]
// }

export type ParliamentVotingBehaviour = {
  name: string;
  factions: FactionVotingBehaviour[];
};

// export type Faction = {
// name: string;
// color: string;
// deputies: number | Group[];
// };

export type FactionVotingBehaviour = {
  name: string;
  index: number;
  color: string;
  votingBehaviour: VotingBehaviour | GroupVotingBehaviour[];
};

//export type Group = {
//name: string;
//deputies: number;
//};

export type GroupVotingBehaviour = {
  name: string;
  votingBehaviour: VotingBehaviour;
};

export type VotingBehaviour = {
  yes: number;
  abstentions: number;
  no: number;
};

export type FactionVotingBehaviourSetter = (
  votingBehaviour: FactionVotingBehaviour,
) => void;

export type PollType = {
  name: string;
  participationThreshold: number;
  passThreshold: number;
  abstentionIsNo: boolean;
};
