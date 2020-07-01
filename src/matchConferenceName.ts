import { ITeamsByID } from "./types";
export const matchConferenceName = (teamID: string, teamsByID: ITeamsByID) => {
  return Array.isArray(teamsByID[teamID])
    ? teamsByID[teamID][0].confName
    : teamsByID[teamID].confName;
};
