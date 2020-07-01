import { IGamesBackByTeam } from "./types";

export const teamsInPlayoffs = (gamesBackByTeam: IGamesBackByTeam) =>
  Object.keys(gamesBackByTeam).filter(
    (teamID) => gamesBackByTeam[teamID].canMakePlayoffs === true
  );
