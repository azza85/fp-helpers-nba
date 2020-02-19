export const calcPositionInStandings = (standings, teamID) =>
  standings
    .map((item, dIndex) => ({
      tID: item.teamId,
      index: dIndex
    }))
    .filter(item => item.tID === teamID)
    .map(item => item.index)[0];
