import { matchHomeID } from "./matchHomeID";
export const homeMatches = (matches: [], teamID: string) =>
  matches.filter(match => matchHomeID(match) === teamID);
