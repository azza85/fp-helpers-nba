import { matchHomeID } from "./matchHomeID";
import { matchAwayID } from "./matchAwayID";

export const teamMatches = (matches, teamID) =>
  matches.filter(
    match => matchHomeID(match) === teamID || matchAwayID(match) === teamID
  );
