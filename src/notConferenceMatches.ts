import { matchConferenceName } from "./matchConferenceName";
import { matchHomeID } from "./matchHomeID";
import { matchAwayID } from "./matchAwayID";
import { IMatches, ITeamsByID } from "./types";

export const notConferenceMatches = (
  matches: IMatches[],
  teamsByID: ITeamsByID
) =>
  matches.filter((match) => {
    const homeConfID = matchConferenceName(matchHomeID(match), teamsByID);
    const awayConfID = matchConferenceName(matchAwayID(match), teamsByID);
    return homeConfID !== awayConfID;
  });
