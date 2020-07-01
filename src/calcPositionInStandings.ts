import { IStandings } from "./types/index";
export const calcPositionInStandings = (
  standings: IStandings[],
  teamID: string
) =>
  standings
    .map((item, dIndex) => ({
      tID: item.teamId,
      index: dIndex
    }))
    .filter((item) => item.tID === teamID)
    .map((item) => item.index)[0];
