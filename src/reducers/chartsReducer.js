export default function chartsReducer(state = [], action) {

    switch (action.type) {
        // beginning of fetch get request to retrieve chart data when loaded on data dashboard
        case 'START_ADDING_CHARTDATA_REQUEST':
            console.log("inside chart fetch")
            return state
        // adding results of get request to state.charts array 
        case 'ADD_CHARTDATA':
            return [...state, action.chart]

        // removing chart from state.charts array when chart is removed from data dashboard
        case 'DELETE_CHART':
            return state.filter(chart => chart.id !== action.id)   

        // beginning of fetch post request to add new chart to database
        case 'START_ADDING_DATA_SOURCE_REQUEST':
            return state
        // new chart is added to the database, but not added to state.charts until it is loaded on the dashboard
        case 'ADDING_DATA_SOURCE':
            return state

        default:
            return state
    }
}


