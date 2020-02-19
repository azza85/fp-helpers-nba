export const matchConferenceName = (teamID: string, teamsByID: object) => {
  return Array.isArray(teamsByID[teamID])
    ? teamsByID[teamID][0].confName
    : teamsByID[teamID].confName;
};
