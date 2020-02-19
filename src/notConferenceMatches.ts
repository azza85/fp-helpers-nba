import { matchConferenceName } from "./matchConferenceName";
import { matchHomeID } from "./matchHomeID";
import { matchAwayID } from "./matchAwayID";

export const notConferenceMatches = (matches, teamsByID) =>
  matches.filter(match => {
    const homeConfID = matchConferenceName(matchHomeID(match), teamsByID);
    const awayConfID = matchConferenceName(matchAwayID(match), teamsByID);
    return homeConfID !== awayConfID;
  });
