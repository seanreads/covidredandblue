function isInt(n) {
    return n % 1 === 0;
 }

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

const formatNumber = (number,mask) => {
    let retVal;
    if (isFloat(number)) {
       retVal = numeral(number).format('0,0.00');
    }
    else if (isInt(number)) {
        retVal = numeral(number).format('0,0')
    }
    else {
        retVal = '--';
    }
    return retVal;
}
const formatPercentage = (number,mask) => isNaN(number) ? '--' : numeral(number).format(mask);

const showOrHideCases = showCasesOrDeaths => ['cases','casesAndDeaths'].includes(showCasesOrDeaths) ? 'showCell' : 'hideCell';
const showOrHideDeaths = showCasesOrDeaths => ['deaths','casesAndDeaths'].includes(showCasesOrDeaths) ? 'showCell' : 'hideCell';
const colSpanCasesAndDeaths = showCasesOrDeaths => ['casesAndDeaths'].includes(showCasesOrDeaths) ? '2' : '1';

const rowClassForPartyControl = (partyControl) => { 
    let className;
    if (partyControl == 'R')
        className = 'rowRepublicanControl';
    else if (partyControl == 'D')
        className = 'rowDemocratControl';
    else if (partyControl == 'S')
        className = 'rowSplitControl'
    else
        className = 'unknownControl'
    return className;
}
const getNewCasesPrevWeeksKey = (prevNumberOfWeeks, showPer100k) => showPer100k ? `NewCases_prev${prevNumberOfWeeks}wk_100k` : `NewCases_prev${prevNumberOfWeeks}wk`;
const getNewDeathsPrevWeeksKey = (prevNumberOfWeeks, showPer100k) => showPer100k ? `NewDeaths_prev${prevNumberOfWeeks}wk_100k` : `NewDeaths_prev${prevNumberOfWeeks}wk`;

const getNewCasesNextWeeksKey = (nextNumberOfWeeks, showPer100k) => showPer100k ? `NewCases_next${nextNumberOfWeeks}wk_100k` : `NewCases_next${nextNumberOfWeeks}wk`;
const getNewDeathsNextWeeksKey = (nextNumberOfWeeks, showPer100k) => showPer100k ? `NewDeaths_next${nextNumberOfWeeks}wk_100k` : `NewDeaths_next${nextNumberOfWeeks}wk`;

const getNewCasesKey = (showPer100k, show7DayAvg) => {
    let newCasesKey = '';
    if (showPer100k && show7DayAvg)
        newCasesKey = 'NewCases_7da_100k';
    else if (showPer100k)
        newCasesKey = 'NewCases_100k';
    else if (show7DayAvg)
        newCasesKey = 'NewCases_7da';
    else
        newCasesKey = 'NewCases';
    return newCasesKey;
}

const getNewDeathsKey = (showPer100k, show7DayAvg) => {
    let newDeathsKey = '';
    if (showPer100k && show7DayAvg)
        newDeathsKey = 'NewDeaths_7da_100k';
    else if (showPer100k)
        newDeathsKey = 'NewDeaths_100k';
    else if (show7DayAvg)
        newDeathsKey = 'NewDeaths_7da';
    else
        newDeathsKey = 'NewDeaths';
    return newDeathsKey;
}

const getTotalCasesKey = showPer100k => showPer100k ? 'Cases_100k' : 'Cases';
const getTotalDeathsKey = showPer100k => showPer100k ? 'Deaths_100k' : 'Deaths';

const govtRowShowHideClass = (record, govtRowShowHide) => {

    let showRow = true;
    
        if ((record['Governor'] == 'D' || record['Governor'] == 'NA') && govtRowShowHide['showDemocratGovernors'] == false) 
            showRow = false;
        if ((record['Legislature'] == 'D' || record['Legislature'] == 'NA') && govtRowShowHide['showDemocratLegislatures'] == false)
            showRow = false;
        if ((record['Governor'] == 'R' || record['Governor'] == 'NA') && govtRowShowHide['showRepublicanGovernors'] == false)
            showRow = false;
        if ((record['Legislature'] == 'R' || record['Legislature'] == 'NA') && govtRowShowHide['showRepublicanLegislatures'] == false)
            showRow = false;

    return (showRow == true ? 'showRow' : 'hideRow');
}