import { IMatches, RecordTypes } from "./types";
import { matchesWon } from "./matchesWon";
import { matchesLost } from "./matchesLost";
import { winPercentage } from "./winPercentage";

export const record = (
  matches: IMatches[],
  teamID: string,
  type: RecordTypes
) => {
  const matchesList = matches;
  const matchesCount = matchesList.length;
  return {
    [`matches${type}Count`]: matchesCount,
    [`won${type}`]: matchesWon(matchesList, teamID),
    [`lost${type}`]: matchesLost(matchesList, teamID),
    [`winPercentage${type}`]: winPercentage(
      matchesCount,
      matchesWon(matchesList, teamID)
    )
  };
};
