export const isWinningDivision = (teamID: string, divisionStandings) => {
  return divisionStandings[0].teamId === teamID ? true : false;
};
