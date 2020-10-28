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
    if (partyControl == 'R' || partyControl.startsWith('R_'))
        className = 'rowRepublicanControl';
    else if (partyControl == 'D' || partyControl.startsWith('D_'))
        className = 'rowDemocratControl';
    else if (partyControl == 'S' || partyControl.startsWith('S_'))
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

const getTotalCasesKey = (showPer100k, showPast100Days) => {
    let totalCasesKey = '';
    if (showPer100k && showPast100Days)
        totalCasesKey = 'NewCases_prev100d_100k';
    else if (showPer100k)
        totalCasesKey = 'Cases_100k';
    else if (showPast100Days)
        totalCasesKey = 'NewCases_prev100d';
    else
        totalCasesKey = 'Cases';
    return totalCasesKey;
}

const getTotalDeathsKey = (showPer100k, showPast100Days) => {
    let totalDeathsKey = '';
    if (showPer100k && showPast100Days)
        totalDeathsKey = 'NewDeaths_prev100d_100k';
    else if (showPer100k)
        totalDeathsKey = 'Deaths_100k';
    else if (showPast100Days)
        totalDeathsKey = 'NewDeaths_prev100d';
    else
        totalDeathsKey = 'Deaths';
    return totalDeathsKey;
}

const govtRowShowHide = (record, govtRowShowHide) => {

    let showRow = true;
    
    if ((record['Governor'] == 'D' || record['Governor'] == 'NA') && govtRowShowHide['showDemocratGovernors'] == false) 
        showRow = false;
    if ((record['Legislature'] == 'D' || record['Legislature'] == 'NA') && govtRowShowHide['showDemocratLegislatures'] == false)
        showRow = false;
    if ((record['Governor'] == 'R' || record['Governor'] == 'NA') && govtRowShowHide['showRepublicanGovernors'] == false)
        showRow = false;
    if ((record['Legislature'] == 'R' || record['Legislature'] == 'NA') && govtRowShowHide['showRepublicanLegislatures'] == false)
        showRow = false;

    return showRow;
}

const govtSummaryRowShowHide = (record, govtRowShowHide) => {

    let showRow = true;
    
    if ((['D_Governor', 'D_Control'].includes(record['State'])) && govtRowShowHide['showDemocratGovernors'] == false) 
        showRow = false;
    if ((['R_Governor', 'R_Control'].includes(record['State'])) && govtRowShowHide['showRepublicanGovernors'] == false) 
        showRow = false;        
    if ((['D_Legislature', 'D_Control'].includes(record['State'])) && govtRowShowHide['showDemocratLegislatures'] == false)
        showRow = false;
    if ((['R_Legislature', 'R_Control'].includes(record['State'])) && govtRowShowHide['showRepublicanLegislatures'] == false)
        showRow = false;        

    return showRow;
}

const getRowColorForGovernor = record => {
    let governorColor = 'gray';
    if (record['Governor'] == 'R')
        governorColor = 'red';
    else if (record['Governor'] == 'D')
        governorColor = 'blue';
    return governorColor;
}

const getRowColorForLegislature = record => {
    let legislatureColor = 'gray';
    if (record['Legislature'] == 'R')
        legislatureColor = 'red';
    else if (record['Legislature'] == 'D')
        legislatureColor = 'blue';
    return legislatureColor;
}

const govtIconClassName = state => {
    let className = '';
    if (state == 'R_Governor')
        className = 'redGovernor user big icon';
    else if (state == 'D_Governor')
        className = 'blueGovernor user big icon'
    else if (state == 'R_Legislature')
        className = 'redLegislature university big icon'        
    else if (state == 'D_Legislature')
        className = 'blueLegislature university big icon'
    else if (state == 'S_Legislature')
        className = 'grayLegislature university big icon'
    else if (state == 'US') 
        className = ''     

    return className;
}