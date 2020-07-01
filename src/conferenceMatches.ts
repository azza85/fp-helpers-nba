import { IMatches, ITeamsByID } from "./types/index";
import { matchAwayID } from "./matchAwayID";
import { matchConferenceName } from "./matchConferenceName";
import { matchHomeID } from "./matchHomeID";
export const conferenceMatches = (matches: IMatches[], teamsByID: ITeamsByID) =>
  matches.filter((match) => {
    const homeConfID = matchConferenceName(matchHomeID(match), teamsByID);
    const awayConfID = matchConferenceName(matchAwayID(match), teamsByID);
    return homeConfID === awayConfID;
  });
