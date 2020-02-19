export const winPercentage = (matchesCount, won) => {
  const percentage = (won / matchesCount).toFixed(3);
  return percentage.replace("0.", ".");
};
