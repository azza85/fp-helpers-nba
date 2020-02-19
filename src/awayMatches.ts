import { matchAwayID } from "./matchAwayID";
export const awayMatches = (matches, teamID) =>
  matches.filter(match => matchAwayID(match) === teamID);
