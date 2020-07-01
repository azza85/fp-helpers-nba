import { IMatches } from "./types";
import { matchHomeID } from "./matchHomeID";
export const isHomeID = (match: IMatches, teamID: string) =>
  teamID === matchHomeID(match) ? true : false;
