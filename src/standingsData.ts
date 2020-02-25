import { record } from "./record";
import { calcPointsFor } from "./calcPointsFor";
import { calcPointsAgainst } from "./calcPointsAgainst";
import { notConferenceMatches } from "./notConferenceMatches";
import { conferenceMatches } from "./conferenceMatches";
import { divisionMatches } from "./divisionMatches";
import { awayMatches } from "./awayMatches";
import { homeMatches } from "./homeMatches";
import { completedMatches } from "./completedMatches";
import { teamMatches } from "./teamMatches";
import { teamsInPlayoffs } from "./teamsInPlayoffs";

export const standingsData = (teams, matches, teamsByID, gamesBackByTeam) => {
  const getTeamsInPlayoffs = teamsInPlayoffs(gamesBackByTeam);
  const getCompletedMatches = completedMatches(matches);
  return teams.reduce((obj, team) => {
    const teamID = team.teamId;
    const homeMatchesList = homeMatches(getCompletedMatches, teamID);
    const awayMatchesList = awayMatches(getCompletedMatches, teamID);
    const teamDivision = teamsByID[teamID].divName;
    //const teamConference = teamsByID[teamID].confName
    const divisionMatchesList = divisionMatches(
      teamMatches(getCompletedMatches, teamID),
      teamsByID
    );
    const conferenceMatchesList = conferenceMatches(
      teamMatches(getCompletedMatches, teamID),
      teamsByID
    );
    const notConferenceMatchesList = notConferenceMatches(
      teamMatches(getCompletedMatches, teamID),
      teamsByID
    );
    const getTeamConfMatches = teamMatches(
      conferenceMatchesList,
      teamID
    ).filter(
      match =>
        getTeamsInPlayoffs.includes(match.hTeam.teamId) ||
        getTeamsInPlayoffs.includes(match.vTeam.teamId)
    );
    const getTeamNotConfMatches = teamMatches(
      notConferenceMatchesList,
      teamID
    ).filter(
      match =>
        getTeamsInPlayoffs.includes(match.hTeam.teamId) ||
        getTeamsInPlayoffs.includes(match.vTeam.teamId)
    );

    return {
      ...obj,
      [teamID]: {
        teamId: teamID,
        name: team.shortName,
        pointFor: calcPointsFor(
          teamMatches(homeMatchesList, teamID),
          teamMatches(awayMatchesList, teamID)
        ),
        pointAgainst: calcPointsAgainst(
          teamMatches(homeMatchesList, teamID),
          teamMatches(awayMatchesList, teamID)
        ),
        ...record(teamMatches(getCompletedMatches, teamID), teamID, "Total"),
        ...record(teamMatches(homeMatchesList, teamID), teamID, "Home"),
        ...record(teamMatches(awayMatchesList, teamID), teamID, "Away"),
        ...record(teamMatches(divisionMatchesList, teamID), teamID, "Division"),
        ...record(
          teamMatches(conferenceMatchesList, teamID),
          teamID,
          "Conference"
        ),
        ...record(getTeamConfMatches, teamID, "ConfEligible"),
        ...record(getTeamNotConfMatches, teamID, "OConfEligible")
      }
    };
  }, {});
};
