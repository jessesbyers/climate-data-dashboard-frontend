export default function wondersReducer(state = [], action) {
    switch (action.type) {
        case 'START_FETCH_WONDERS_REQUEST':
            console.log("inside wonders fetch")
            return state

        case 'FETCH_WONDERS':
            console.log(action)
            return [...state, action.wonder]


    



        case 'START_ADDING_ADDWONDER_REQUEST':
            return {
                ...state,
                // requesting: true
            }

        case 'ADD_WONDER':   
        console.log(action)             
            i = state.charts.findIndex(chart => chart.id === action.mutatedWonder.chart_id)

            return {
                ...state,
                charts: [...state.charts.slice(0, i),
                    {
                    ...state.charts[i], wonders: [...state.charts[i].wonders, action.mutatedWonder]
                    },
                    ...state.charts.slice(i + 1)
                ],
                requesting: false
            }


            case 'START_DELETE_WONDER_REQUEST':
                return {
                    ...state,
                    requesting: true
                }
    
            case 'DELETE_WONDER': 
                i = state.charts.findIndex(chart => chart.id === action.chartId)
    
                return {
                    ...state, 
                    charts: [...state.charts.slice(0, i),
                        {...state.charts[i], wonders: state.charts[i].wonders.filter(wonder => wonder.id !== action.wonder_id)
                        },
                        ...state.charts.slice(i + 1)
                    ],
                    requesting: false
                }
    
                case 'START_UPVOTE_WONDER_REQUEST':
                    return {
                        ...state,
                        requesting: true
                    }
        
                case 'UPVOTE_WONDER':
                    i = state.charts.findIndex(chart => chart.id === action.updatedWonder.chart_id)
        
                    return {
                        ...state, 
                        charts: [...state.charts.slice(0, i),
                            {...state.charts[i], wonders: [...state.charts[i].wonders.filter(wonder => wonder.id !== action.updatedWonder.id), action.updatedWonder]
                            },
                            ...state.charts.slice(i + 1)
                        ],
                        requesting: false
                    }
 
                case 'START_DOWNVOTE_WONDER_REQUEST':
                    return {
                        ...state,
                        requesting: true
                    }
        
                case 'DOWNVOTE_WONDER':
                    i = state.charts.findIndex(chart => chart.id === action.updatedWonder.chart_id)
        
                    return {
                        ...state, 
                        charts: [...state.charts.slice(0, i),
                            {...state.charts[i], wonders: [...state.charts[i].wonders.filter(wonder => wonder.id !== action.updatedWonder.id), action.updatedWonder]
                            },
                            ...state.charts.slice(i + 1)
                        ],
                        requesting: false
                    }

                    

        default:
    
            return state
    }
}