import { IGamesBackByTeam } from "./types";

export const teamsOutPlayoffs = (gamesBackByTeam: IGamesBackByTeam) =>
  Object.keys(gamesBackByTeam).filter(
    (teamID) => gamesBackByTeam[teamID].canMakePlayoffs === false
  );
