import { matchAwayID } from "./matchAwayID";
import { matchDivisionName } from "./matchDivisionName";
import { matchHomeID } from "./matchHomeID";
export const divisionMatches = (matches: [], teamsByID: object) =>
  matches.filter(match => {
    const homeDivID = matchDivisionName(matchHomeID(match), teamsByID);
    const awayDivID = matchDivisionName(matchAwayID(match), teamsByID);
    return homeDivID === awayDivID;
  });
