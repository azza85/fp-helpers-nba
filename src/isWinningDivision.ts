import { IStandings } from "./types";

export const isWinningDivision = (
  teamID: string,
  divisionStandings: IStandings[]
) => {
  return divisionStandings[0].teamId === teamID ? true : false;
};
