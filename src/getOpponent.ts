import { IMatches } from "./types";
import { matchAwayID } from "./matchAwayID";
import { matchHomeID } from "./matchHomeID";

export const getOpponent = (match: IMatches, teamID: string) =>
  teamID === matchAwayID(match) ? matchHomeID(match) : matchAwayID(match);
