import { matchWinnerID } from "./matchWinnerID";
import { sortedTeamsID } from "./sortedTeamsID";
import { IMatches } from "./types";

export const headToHead = (matches: IMatches[]) =>
  matches.reduce((obj, match) => {
    const matchAwayID = (match) => Number(match.vTeam.teamId);
    const matchHomeID = (match) => Number(match.hTeam.teamId);
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
