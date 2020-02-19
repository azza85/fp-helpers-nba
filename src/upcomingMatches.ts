export const upcomingMatches = matches =>
  matches.filter(match => match.statusGame === "Scheduled");
