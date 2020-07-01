import { IMatches } from "./types/index";
export const upcomingMatches = (matches: IMatches[]): IMatches[] =>
  matches.filter((match) => match.statusGame === "Scheduled");
