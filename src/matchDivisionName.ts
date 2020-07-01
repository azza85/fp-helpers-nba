import { ITeamsByID } from "./types";
export const matchDivisionName = (teamID: string, teamsByID: ITeamsByID) => {
  return Array.isArray(teamsByID[teamID])
    ? teamsByID[teamID][0].divName
    : teamsByID[teamID].divName;
};
