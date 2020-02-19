export const gamesBack = (team1, team2) => {
  if (team1 !== undefined && team2 !== undefined) {
    const team1W = team1.wonTotal;
    const team1L = team1.lostTotal;
    const team1Diff = team1W - team1L;
    const team2W = team2.wonTotal;
    const team2L = team2.lostTotal;
    const team2Diff = team2W - team2L;
    const gb = (team1Diff - team2Diff) / 2;
    return Number(gb.toFixed(1));
  } else {
    return 0;
  }
};
