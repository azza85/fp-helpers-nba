import { matchHomeID } from "./matchHomeID";
import { IMatches } from "./types";
export const homeMatches = (matches: IMatches[], teamID: string): IMatches[] =>
  matches.filter((match) => matchHomeID(match) === teamID);
