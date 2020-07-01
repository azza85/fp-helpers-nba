import { matchAwayID } from "./matchAwayID";
import { matchDivisionName } from "./matchDivisionName";
import { matchHomeID } from "./matchHomeID";
import { IMatches, ITeamsByID } from "./types";
export const divisionMatches = (matches: IMatches[], teamsByID: ITeamsByID) =>
  matches.filter((match) => {
    const homeDivID = matchDivisionName(matchHomeID(match), teamsByID);
    const awayDivID = matchDivisionName(matchAwayID(match), teamsByID);
    return homeDivID === awayDivID;
  });
