
// action removes chart from state so it is not renderIntoDocument, 
// but chart is still stored in database
export const deleteChart = (chart) => {
        return {
            type: 'DELETE_CHART',
            id: chart.id
        }
}