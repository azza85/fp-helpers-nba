import { IMatches } from "./types/index";
export const completedMatches = (matches: IMatches[]): IMatches[] =>
  matches.filter((match) => match.statusGame === "Finished");
