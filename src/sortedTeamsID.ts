export const sortedTeamsID = (id1: number, id2: number) =>
  [id1, id2].sort((a, b) => a - b).join("");
