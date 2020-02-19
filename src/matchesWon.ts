import { matchWinnerID } from "./matchWinnerID";
import { teamMatches } from "./teamMatches";

export const matchesWon = (matches, teamID) =>
  teamMatches(matches, teamID).filter(match => matchWinnerID(match) === teamID)
    .length;
