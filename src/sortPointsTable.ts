import { winPercentageAsNum } from "./winPercentageAsNum";
import { sortedTeamsID } from "./sortedTeamsID";
import {
  IDivisionLeader,
  IHeadToHeadData,
  IStandings,
  ITeamsByID
} from "./types";
export const sortPointsTable = (
  standings: IStandings[],
  teamsByID: ITeamsByID,
  divisionLeader: IDivisionLeader,
  h2hData: IHeadToHeadData
) => {
  return standings.sort((a, b) => {
    const aTeamID = a.teamId;
    const bTeamID = b.teamId;
    const getSortedTeamID = sortedTeamsID(Number(aTeamID), Number(bTeamID));
    const getHeadToHead = h2hData[getSortedTeamID];
    const aH2hWinPercent =
      getHeadToHead !== undefined
        ? Object.values(getHeadToHead).filter((id) => id === aTeamID).length
        : 0;
    const bH2hWinPercent =
      getHeadToHead !== undefined
        ? Object.values(getHeadToHead).filter((id) => id === bTeamID).length
        : 0;
    const aWinPercent = winPercentageAsNum(a.winPercentageTotal);
    const bWinPercent = winPercentageAsNum(b.winPercentageTotal);

    const aConfWinPercent = winPercentageAsNum(a.winPercentageConference);
    const aConfWinPercentEligible = winPercentageAsNum(
      a.winPercentageConfEligible
    );
    const aOConfWinPercentEligible = winPercentageAsNum(
      a.winPercentageOConfEligible
    );
    const aConfName = teamsByID[aTeamID].confName;
    const bConfWinPercent = winPercentageAsNum(b.winPercentageConference);
    const bConfWinPercentEligible = winPercentageAsNum(
      b.winPercentageConfEligible
    );
    const bOConfWinPercentEligible = winPercentageAsNum(
      b.winPercentageOConfEligible
    );

    const bConfName = teamsByID[bTeamID].confName;
    const aDivWinPercent = winPercentageAsNum(a.winPercentageDivision);
    const aDivName = teamsByID[aTeamID].divName;
    const bDivWinPercent = winPercentageAsNum(b.winPercentageDivision);
    const bDivName = teamsByID[bTeamID].divName;

    const aPointsDiff = a.pointFor - a.pointAgainst;
    const bPointsDiff = b.pointFor - b.pointAgainst;

    if (
      aWinPercent === bWinPercent &&
      aH2hWinPercent === bH2hWinPercent &&
      divisionLeader[aTeamID] === false &&
      divisionLeader[bTeamID] === false &&
      ((aDivName === bDivName && bDivWinPercent === aDivWinPercent) ||
        aDivName !== bDivName) &&
      ((aConfName === bConfName && bDivWinPercent === aDivWinPercent) ||
        aConfName !== bConfName) &&
      aConfWinPercentEligible === bConfWinPercentEligible &&
      aOConfWinPercentEligible === bOConfWinPercentEligible
    ) {
      return bPointsDiff - aPointsDiff;
    } else if (
      aWinPercent === bWinPercent &&
      aH2hWinPercent === bH2hWinPercent &&
      divisionLeader[aTeamID] === false &&
      divisionLeader[bTeamID] === false &&
      ((aDivName === bDivName && bDivWinPercent === aDivWinPercent) ||
        aDivName !== bDivName) &&
      ((aConfName === bConfName && bDivWinPercent === aDivWinPercent) ||
        aConfName !== bConfName) &&
      aConfWinPercentEligible === bConfWinPercentEligible
    ) {
      /*
      Better winning percentage against teams eligible
      for playoffs in other conference
      */
      return bOConfWinPercentEligible - aOConfWinPercentEligible;
    } else if (
      aWinPercent === bWinPercent &&
      aH2hWinPercent === bH2hWinPercent &&
      divisionLeader[aTeamID] === false &&
      divisionLeader[bTeamID] === false &&
      ((aDivName === bDivName && bDivWinPercent === aDivWinPercent) ||
        aDivName !== bDivName) &&
      ((aConfName === bConfName && bDivWinPercent === aDivWinPercent) ||
        aConfName !== bConfName)
    ) {
      /*
      Better winning percentage against teams eligible
      for playoffs in own conference
      */
      return bConfWinPercentEligible - aConfWinPercentEligible;
    } else if (
      aWinPercent === bWinPercent &&
      aH2hWinPercent === bH2hWinPercent &&
      divisionLeader[aTeamID] === false &&
      divisionLeader[bTeamID] === false &&
      ((aDivName === bDivName && bDivWinPercent === aDivWinPercent) ||
        aDivName !== bDivName)
    ) {
      /*
      Better winning percentage in conf
      */
      if (aConfName === bConfName) {
        return bConfWinPercent - aConfWinPercent;
      }
    } else if (
      aWinPercent === bWinPercent &&
      aH2hWinPercent === bH2hWinPercent &&
      divisionLeader[aTeamID] === false &&
      divisionLeader[bTeamID] === false
    ) {
      /*
       Better winning percentage against teams in own division
       Only if same division
       */
      if (aDivName === bDivName) {
        return bDivWinPercent - aDivWinPercent;
      }
    } else if (
      aWinPercent === bWinPercent &&
      aH2hWinPercent === bH2hWinPercent
    ) {
      /*
      2 is Division winner?
      */
      if (
        divisionLeader[aTeamID] === true &&
        divisionLeader[bTeamID] === false
      ) {
        return -1;
      } else if (
        divisionLeader[bTeamID] === true &&
        divisionLeader[aTeamID] === false
      ) {
        return 1;
      }
    } else if (aWinPercent === bWinPercent) {
      /*
      1 h2h win percentage
      */
      return bH2hWinPercent - aH2hWinPercent;
    } else {
      /*
      0 better win percent
      */
      return bWinPercent - aWinPercent;
    }
  });
};
