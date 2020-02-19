export const standingsByDivConf = ({ standings, teamsBy, name }) => {
  const teamByIDs = teamsBy[name].map(team => team.teamId);
  return standings.filter(team => teamByIDs.includes(team.teamId));
};
