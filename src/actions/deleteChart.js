
// action removes chart from state so it is not renderIntoDocument, 
// but chart is still stored in database
export const deleteChart = (id) => {
    return {
        type: 'DELETE_CHART',
        id
    }
}