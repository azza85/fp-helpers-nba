import { calcPositionInStandings } from "./calcPositionInStandings";
import { gamesBack } from "./gamesBack";

export const gameBackByTeam = (teamsByID, standings) => {
  return standings.reduce((obj, team, index) => {
    const teamID = team.teamId;
    const gamesLeft = 82 - (team.wonTotal + team.lostTotal);
    const teamDivision = teamsByID[teamID][0].divName;
    const divisionStandings = standings.filter(
      dTeam => teamsByID[dTeam.teamId][0].divName === teamDivision
    );
    const divisionIndex = calcPositionInStandings(divisionStandings, teamID);
    const teamConference = teamsByID[teamID][0].confName;
    const conferenceStandings = standings.filter(
      dTeam => teamsByID[dTeam.teamId][0].confName === teamConference
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
