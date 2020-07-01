import { matchAwayID } from "./matchAwayID";
import { IMatches } from "./types";
export const awayMatches = (matches: IMatches[], teamID: string): IMatches[] =>
  matches.filter((match) => matchAwayID(match) === teamID);
