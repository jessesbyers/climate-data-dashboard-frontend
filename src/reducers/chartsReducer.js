export default function chartsReducer(state = [], action) {

    switch (action.type) {
        case 'START_ADDING_CHARTDATA_REQUEST':
            console.log("inside chart fetch")
            return state

        case 'ADD_CHARTDATA':
            return [...state, action.chart]

        case 'DELETE_CHART':
            return [state.filter(chart => chart.id !== action.id)]   
            
        case 'START_ADDING_DATA_SOURCE_REQUEST':
            return state

        case 'ADDING_DATA_SOURCE':
            return state

        default:
            return state
    }
}


