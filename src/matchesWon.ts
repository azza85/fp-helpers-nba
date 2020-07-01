import { IMatches } from "./types";
import { matchWinnerID } from "./matchWinnerID";
import { teamMatches } from "./teamMatches";

export const matchesWon = (matches: IMatches[], teamID: string) =>
  teamMatches(matches, teamID).filter(
    (match) => matchWinnerID(match) === teamID
  ).length;
