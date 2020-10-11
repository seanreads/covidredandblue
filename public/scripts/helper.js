const formatNumber = (number,mask) => isNaN(number) ? '--' : numeral(number).format(mask);
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

// const getNewCasesPrev6WeeksKey = showPer100k => showPer100k ? 'NewCases_prev6wk_100k' : 'NewCases_prev6wk';
// const getNewDeathsPrev6WeeksKey = showPer100k => showPer100k ? 'NewDeaths_prev6wk_100k' : 'NewDeaths_prev6wk';

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