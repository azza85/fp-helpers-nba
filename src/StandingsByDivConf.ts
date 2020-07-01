import { IStandings, ITeamsByIDArray } from "./types";

export const standingsByDivConf = (
  standings: IStandings[],
  teamsBy: ITeamsByIDArray,
  name: string
) => {
  const teamByIDs = teamsBy[name].map((team) => team.teamId);
  return standings.filter((team) => teamByIDs.includes(team.teamId));
};
