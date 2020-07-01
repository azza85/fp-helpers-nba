export const winPercentage = (matchesCount: number, won: number) => {
  const percentage = (won / matchesCount).toFixed(3);
  return percentage.replace("0.", ".");
};
