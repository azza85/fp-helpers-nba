export const calcPointsAgainst = (homeMatches, awayMatches) => {
  const homeTotal = homeMatches.reduce((acc, curr) => {
    return acc + Number(curr.vTeam.points);
  }, 0);
  const awayTotal = awayMatches.reduce((acc, curr) => {
    return acc + Number(curr.hTeam.points);
  }, 0);
  return homeTotal + awayTotal;
};
