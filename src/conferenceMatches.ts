import { matchAwayID } from "./matchAwayID";
import { matchConferenceName } from "./matchConferenceName";
import { matchHomeID } from "./matchHomeID";
export const conferenceMatches = (matches: [], teamsByID: object) =>
  matches.filter(match => {
    const homeConfID = matchConferenceName(matchHomeID(match), teamsByID);
    const awayConfID = matchConferenceName(matchAwayID(match), teamsByID);
    return homeConfID === awayConfID;
  });
