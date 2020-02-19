import { isWinningDivision } from "./isWinningDivision";
import { standingsByDivConf } from "./standingsByDivConf";
export const divisionLeadersByTeam = (teams, teamsByID, teamsBy, standings) => {
  return teams.reduce((obj, team) => {
    const teamID = team.teamId;
    const teamDivision = teamsByID[teamID].divName;
    return {
      ...obj,
      [teamID]: isWinningDivision(
        teamID,
        standingsByDivConf({
          standings,
          teamsBy,
          name: teamDivision
        })
      )
        ? true
        : false
    };
  }, {});
};
