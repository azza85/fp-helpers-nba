import { calcPositionInStandings } from "./calcPositionInStandings";
import { gamesBack } from "./gamesBack";
import { ITeamsByID, IStandings } from "./types";

export const gameBackByTeam = (
  teamsByID: ITeamsByID,
  standings: IStandings[]
) => {
  return standings.reduce((obj, team, index) => {
    const teamID = team.teamId;
    const gamesLeft = 82 - (team.wonTotal + team.lostTotal);
    const teamDivision = teamsByID[teamID].divName;
    const divisionStandings = standings.filter(
      (dTeam) => teamsByID[dTeam.teamId].divName === teamDivision
    );
    const divisionIndex = calcPositionInStandings(divisionStandings, teamID);
    const teamConference = teamsByID[teamID].confName;
    const conferenceStandings = standings.filter(
      (dTeam) => teamsByID[dTeam.teamId].confName === teamConference
    );
    const conferenceIndex = calcPositionInStandings(
      conferenceStandings,
      teamID
    );
    const canMakePlayoffs =
      gamesLeft -
        gamesBack(
          conferenceStandings[7],
          conferenceStandings[conferenceIndex]
        ) >
      0
        ? true
        : false;
    return {
      ...obj,
      [teamID]: {
        overall: gamesBack(standings[0], standings[index]),
        /* confName: teamConference, */
        /* divName: teamDivision, */
        division: gamesBack(
          divisionStandings[0],
          divisionStandings[divisionIndex]
        ),
        conference: gamesBack(
          conferenceStandings[0],
          conferenceStandings[conferenceIndex]
        ),
        canMakePlayoffs
      }
    };
  }, {});
};
