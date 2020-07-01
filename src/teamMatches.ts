import { matchHomeID } from "./matchHomeID";
import { matchAwayID } from "./matchAwayID";
import { IMatches } from "./types";

export const teamMatches = (matches: IMatches[], teamID: string) =>
  matches.filter(
    (match) => matchHomeID(match) === teamID || matchAwayID(match) === teamID
  );
