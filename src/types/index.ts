interface IMatchTeam {
  teamId: string;
  shortName: string;
  points: string;
}
export interface IMatches {
  statusGame: "Finished" | "Scheduled";
  gameId: string;
  vTeam: IMatchTeam;
  hTeam: IMatchTeam;
}

export interface ITeams {
  teamId: string;
  shortName: string;
  confName: string;
  divName: string;
}

export interface ITeamsByID {
  [teamId: string]: ITeams;
}

export interface ITeamsByIDArray {
  [teamId: string]: ITeams[];
}

export type teamsBy = "";

export type RecordTypes =
  | "Total"
  | "Home"
  | "Away"
  | "Division"
  | "Conference"
  | "ConfEligible"
  | "OConfEligible";

export type TeamShortNames =
  | "ATL"
  | "BOS"
  | "BKN"
  | "CHA"
  | "CHI"
  | "CLE"
  | "DAL"
  | "DEN"
  | "DET"
  | "GSW"
  | "HOU"
  | "IND"
  | "LAC"
  | "LAL"
  | "MEM"
  | "MIA"
  | "MIL"
  | "MIN"
  | "NOP"
  | "NYK"
  | "OKC"
  | "ORL"
  | "PHI"
  | "PHX"
  | "POR"
  | "SAC"
  | "SAS"
  | "TOR"
  | "UTA"
  | "WAS";

export interface IDivisionLeader {
  [teamId: string]: boolean;
}

export interface IHeadToHeadData {
  [teamId: string]: {
    [matchId: string]: string;
  };
}

export interface IGamesBackByTeam {
  [teamId: string]: {
    overall: number;
    division: number;
    conference: number;
    canMakePlayoffs: boolean;
  };
}

export interface IStandings {
  teamId: string;
  name: TeamShortNames;
  pointFor: number;
  pointAgainst: number;
  matchesTotalCount: number;
  wonTotal: number;
  lostTotal: number;
  winPercentageTotal: string;
  matchesHomeCount: number;
  wonHome: number;
  lostHome: number;
  winPercentageHome: string;
  matchesAwayCount: number;
  wonAway: number;
  lostAway: number;
  winPercentageAway: string;
  matchesDivisionCount: number;
  wonDivision: number;
  lostDivision: number;
  winPercentageDivision: string;
  matchesConferenceCount: number;
  wonConference: number;
  lostConference: number;
  winPercentageConference: string;
  matchesConfEligibleCount: number;
  wonConfEligible: number;
  lostConfEligible: number;
  winPercentageConfEligible: string;
  matchesOConfEligibleCount: number;
  wonOConfEligible: number;
  lostOConfEligible: number;
  winPercentageOConfEligible: string;
}
