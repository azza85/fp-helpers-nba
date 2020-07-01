import { IMatches } from "./types/index";
export const calcPointsFor = (
  homeMatches: IMatches[],
  awayMatches: IMatches[]
): number => {
  const homeTotal = homeMatches.reduce(
    (acc, curr) => acc + Number(curr.hTeam.points),
    0
  );
  const awayTotal = awayMatches.reduce(
    (acc, curr) => acc + Number(curr.vTeam.points),
    0
  );
  return homeTotal + awayTotal;
};
