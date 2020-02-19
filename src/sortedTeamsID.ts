export const sortedTeamsID = (id1, id2) => {
  const numID1 = Number(id1);
  const numID2 = Number(id2);
  return [numID1, numID2].sort((a, b) => a - b).join("");
};
