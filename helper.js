const formatNumber = (number,mask) => numeral(number).format(mask);
const formatPercentage = (number,mask) => numeral(number).format(mask);

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

const getNewCasesNextWeeksKey = nextNumberOfWeeks => `NewCases_next${nextNumberOfWeeks}wk`;
const getNewDeathsNextWeeksKey = nextNumberOfWeeks => `NewDeaths_next${nextNumberOfWeeks}wk`;

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