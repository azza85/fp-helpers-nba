import { matchAwayID } from "./matchAwayID";
import { matchHomeID } from "./matchHomeID";

export const matchWinnerID = match =>
  Number(match.vTeam.points) > Number(match.hTeam.points)
    ? matchAwayID(match)
    : matchHomeID(match);
