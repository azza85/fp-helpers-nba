import { matchWinnerID } from "./matchWinnerID";
import { sortedTeamsID } from "./sortedTeamsID";

export const headToHead = matches =>
  matches.reduce((obj, match) => {
    const matchAwayID = match => match.vTeam.teamId;
    const matchHomeID = match => match.hTeam.teamId;
    const getSortedTeamID = sortedTeamsID(
      matchAwayID(match),
      matchHomeID(match)
    );
    return {
      ...obj,
      [getSortedTeamID]: {
        ...obj[getSortedTeamID],
        [match.gameId]: matchWinnerID(match)
      }
    };
  }, {});
