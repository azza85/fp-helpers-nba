export const matchDivisionName = (teamID: string, teamsByID: object) => {
  return Array.isArray(teamsByID[teamID])
    ? teamsByID[teamID][0].divName
    : teamsByID[teamID].divName;
};
