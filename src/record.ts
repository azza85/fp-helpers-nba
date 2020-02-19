import { matchesWon } from "./matchesWon";
import { matchesLost } from "./matchesLost";
import { winPercentage } from "./winPercentage";

export const record = (matches, teamID, type) => {
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
