export default function noticesReducer(state = [], action) {

    switch (action.type) {
        case 'START_FETCH_NOTICES_REQUEST':
            console.log("inside start fetch notices request")
            return state

        case 'FETCH_NOTICES':
            console.log(action)
            return [...state, action.notice]
                
        // case 'START_ADDING_ADDNOTICE_REQUEST':
        //     return [...state]


        // case 'ADD_NOTICE':  
        //     i = state.charts.findIndex(chart => chart.id === action.mutatedNotice.chart_id)

        //     return {
        //         ...state,
        //         charts: [...state.charts.slice(0, i),
        //             {
        //             ...state.charts[i], notices: [...state.charts[i].notices, action.mutatedNotice]
        //             },
        //             ...state.charts.slice(i + 1)
        //         ],
        //         requesting: false
        //     }
            default:
                return state
    }
}