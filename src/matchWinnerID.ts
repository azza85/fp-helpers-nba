import { IMatches } from "./types";
import { matchAwayID } from "./matchAwayID";
import { matchHomeID } from "./matchHomeID";

export const matchWinnerID = (match: IMatches) =>
  Number(match.vTeam.points) > Number(match.hTeam.points)
    ? matchAwayID(match)
    : matchHomeID(match);
