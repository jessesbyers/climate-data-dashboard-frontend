// may need to revise initial state
export default function manageStudenInput(state = {charts: [], requesting: false}, action) {
    switch (action.type) {
        case 'START_ADDING_CHARTDATA_REQUEST':
            return {
                ...state,
                requesting: true
            }

        case 'ADD_CHARTDATA':
            console.log(action.chart)
            return {
                charts: state.charts.concat(action.chart),
                requesting: false
            }
        case 'DELETE_CHART':
            return {
                charts: state.charts.filter(chart => chart.id !== action.id), 
                requesting: false
            }    

        case 'START_ADDING_ADDNOTICE_REQUEST':
            console.log("inside start_adding_notice reducer")    
            return {
                ...state,
                requesting: true
            }

        case 'ADD_NOTICE':                
            let index = state.charts.findIndex(chart => chart.id == action.mutatedNotice.chart_id)

            return {
                ...state,
                charts: [...state.charts.slice(0, index),
                    {
                    ...state.charts[index], notices: [...state.charts[index].notices, action.mutatedNotice]
                    },
                    ...state.charts.slice(index + 1)
                ],
                requesting: false
            }

        case 'START_ADDING_ADDWONDER_REQUEST':
            console.log("inside start_adding_wonder reducer")    
            return {
                ...state,
                requesting: true
            }

        case 'ADD_WONDER':                
            let idx = state.charts.findIndex(chart => chart.id == action.mutatedWonder.chart_id)

            return {
                ...state,
                charts: [...state.charts.slice(0, idx),
                    {
                    ...state.charts[idx], wonders: [...state.charts[idx].wonders, action.mutatedWonder]
                    },
                    ...state.charts.slice(idx + 1)
                ],
                requesting: false
            }
    

        case 'START_DELETE_NOTICE_REQUEST':
            console.log("inside START_DELETE_NOTICE_REQUEST reducer")    
            return {
                ...state,
                requesting: true
            }

        case 'DELETE_NOTICE':
            console.log("inside DELETE_NOTICE reducer")
            return state    




        case 'START_DELETE_WONDER_REQUEST':
            console.log("inside START_DELETE_WONDER_REQUEST reducer")    
            return {
                ...state,
                requesting: true
            }

        case 'DELETE_WONDER':
            console.log("inside DELETE_WONDER reducer")
            return state     






        // case 'UPVOTE':
        //     return state


        default:
            return state
    }
}