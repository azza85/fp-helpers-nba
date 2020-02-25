export const isHomeID = (match: any, teamID: any) => {
  const matchHomeID = (match: any) => match.hTeam.teamId;
  return teamID === matchHomeID(match) ? true : false;
};
