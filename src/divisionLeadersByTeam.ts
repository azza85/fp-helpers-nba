import { isWinningDivision } from "./isWinningDivision";
import { StandingsByDivConf } from "./StandingsByDivConf";
export const divisionLeadersByTeam = (teams, teamsByID, teamsBy, standings) => {
  return teams.reduce((obj, team) => {
    const teamID = team.teamId;
    const teamDivision = teamsByID[teamID][0].divName;
    return {
      ...obj,
      [teamID]: isWinningDivision(
        teamID,
        StandingsByDivConf({
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
