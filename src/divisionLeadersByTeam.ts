import { IStandings, ITeams, ITeamsByID, ITeamsByIDArray } from "./types/index";
import { isWinningDivision } from "./isWinningDivision";
import { standingsByDivConf } from "./standingsByDivConf";
export const divisionLeadersByTeam = (
  teams: ITeams[],
  teamsByID: ITeamsByID,
  teamsBy: ITeamsByIDArray,
  standings: IStandings[]
) => {
  return teams.reduce((obj, team) => {
    const teamID = team.teamId;
    const teamDivision = teamsByID[teamID].divName;
    return {
      ...obj,
      [teamID]: isWinningDivision(
        teamID,
        standingsByDivConf(standings, teamsBy, teamDivision)
      )
        ? true
        : false
    };
  }, {});
};
