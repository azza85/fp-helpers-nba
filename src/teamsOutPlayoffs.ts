export const teamsOutPlayoffs = (gamesBackByTeam: any) =>
  Object.keys(gamesBackByTeam).filter(
    teamID => gamesBackByTeam[teamID].canMakePlayoffs === false
  );
