export const getOpponent = (match: any, teamID: any) => {
  const matchAwayID = (match: any) => match.vTeam.teamId;
  const matchHomeID = (match: any) => match.hTeam.teamId;
  return teamID === matchAwayID(match)
    ? matchHomeID(match)
    : matchAwayID(match);
};
