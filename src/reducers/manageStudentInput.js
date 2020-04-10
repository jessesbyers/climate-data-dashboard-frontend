// may need to revise initial state
export default function manageStudenInput(state = {charts: [], requesting: false}, action) {
    switch (action.type) {
        case 'START_ADDING_CHARTDATA_REQUEST':
            return {
                ...state,
                requesting: true
            }

        case 'ADD_CHARTDATA':
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
            return {
                ...state,
                requesting: true
            }

        case 'ADD_NOTICE':  
        console.log(action)  
        console.log(state.charts)            
            let index = state.charts.findIndex(chart => chart.id === action.mutatedNotice.chart_id)

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
            return {
                ...state,
                requesting: true
            }

        case 'ADD_WONDER':   
        console.log(action)             
            let idx = state.charts.findIndex(chart => chart.id === action.mutatedWonder.chart_id)

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
            return {
                ...state,
                requesting: true
            }

        case 'DELETE_NOTICE': 
            let i = state.charts.findIndex(chart => chart.id === action.chartId)

            return {
                ...state, 
                charts: [...state.charts.slice(0, i),
                    {...state.charts[i], notices: state.charts[i].notices.filter(notice => notice.id !== action.notice_id)
                    },
                    ...state.charts.slice(i + 1)
                ],
                requesting: false
            }

        case 'START_DELETE_WONDER_REQUEST':
            console.log("inside START_DELETE_WONDER_REQUEST reducer")    
            return {
                ...state,
                requesting: true
            }

            case 'DELETE_WONDER': 
            let ix = state.charts.findIndex(chart => chart.id === action.chartId)

            return {
                ...state, 
                charts: [...state.charts.slice(0, ix),
                    {...state.charts[ix], wonders: state.charts[ix].wonders.filter(wonder => wonder.id !== action.wonder_id)
                    },
                    ...state.charts.slice(ix + 1)
                ],
                requesting: false
            }


        // case 'UPVOTE':
        //     return state


        default:
            return state
    }
}