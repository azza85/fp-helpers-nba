export const teamsInPlayoffs = (gamesBackByTeam: any) =>
  Object.keys(gamesBackByTeam).filter(
    teamID => gamesBackByTeam[teamID].canMakePlayoffs === true
  );
