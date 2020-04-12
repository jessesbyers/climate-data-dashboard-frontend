export default function wondersReducer(state = [], action) {
    let ix
    switch (action.type) {
        case 'START_FETCH_WONDERS_REQUEST':
            return state

        case 'FETCH_WONDERS':
            return [...state, action.wonder]



        case 'START_ADDING_ADDWONDER_REQUEST':
            return state

        case 'ADD_WONDER':   
            return [...state, action.mutatedWonder]




// need to revise below 



        case 'START_DELETE_WONDER_REQUEST':
            return {
                ...state,
                requesting: true
            }

        case 'DELETE_WONDER': 
            ix = state.charts.findIndex(chart => chart.id === action.chartId)

            return {
                ...state, 
                charts: [...state.charts.slice(0, ix),
                    {...state.charts[ix], wonders: state.charts[ix].wonders.filter(wonder => wonder.id !== action.wonder_id)
                    },
                    ...state.charts.slice(ix + 1)
                ],
                requesting: false
            }

            case 'START_UPVOTE_WONDER_REQUEST':
                return {
                    ...state,
                    requesting: true
                }
    
            case 'UPVOTE_WONDER':
                ix = state.charts.findIndex(chart => chart.id === action.updatedWonder.chart_id)
    
                return {
                    ...state, 
                    charts: [...state.charts.slice(0, ix),
                        {...state.charts[ix], wonders: [...state.charts[ix].wonders.filter(wonder => wonder.id !== action.updatedWonder.id), action.updatedWonder]
                        },
                        ...state.charts.slice(ix + 1)
                    ],
                    requesting: false
                }

            case 'START_DOWNVOTE_WONDER_REQUEST':
                return {
                    ...state,
                    requesting: true
                }
    
            case 'DOWNVOTE_WONDER':
                ix = state.charts.findIndex(chart => chart.id === action.updatedWonder.chart_id)
    
                return {
                    ...state, 
                    charts: [...state.charts.slice(0, ix),
                        {...state.charts[ix], wonders: [...state.charts[ix].wonders.filter(wonder => wonder.id !== action.updatedWonder.id), action.updatedWonder]
                        },
                        ...state.charts.slice(ix + 1)
                    ],
                    requesting: false
                }

                    

        default:
    
            return state
    }
}