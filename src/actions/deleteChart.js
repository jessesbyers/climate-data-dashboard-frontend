
// action removes chart from state so it is not rendered when dashboard is cleared 
// chart is still stored in database, so no fetch request needed
export const deleteChart = (chart) => {
        return {
            type: 'DELETE_CHART',
            id: chart.id
        }
}