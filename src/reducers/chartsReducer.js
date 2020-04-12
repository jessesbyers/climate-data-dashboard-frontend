export default function chartsReducer(state = [], action) {

    let i

    switch (action.type) {
        case 'START_ADDING_CHARTDATA_REQUEST':
            return [...state]

        case 'ADD_CHARTDATA':
            return [...state, action.chart]

        case 'DELETE_CHART':
            return [state.filter(chart => chart.id !== action.id)]    






        case 'START_ADDING_ADDNOTICE_REQUEST':
            return {
                ...state,
                requesting: true
            }

        case 'ADD_NOTICE':  
            i = state.charts.findIndex(chart => chart.id === action.mutatedNotice.chart_id)

            return {
                ...state,
                charts: [...state.charts.slice(0, i),
                    {
                    ...state.charts[i], notices: [...state.charts[i].notices, action.mutatedNotice]
                    },
                    ...state.charts.slice(i + 1)
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
    




        case 'START_DELETE_NOTICE_REQUEST':
            return {
                ...state,
                requesting: true
            }

        case 'DELETE_NOTICE': 
            i = state.charts.findIndex(chart => chart.id === action.chartId)

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



        case 'START_UPVOTE_NOTICE_REQUEST':
            return {
                ...state,
                requesting: true
            }

        case 'UPVOTE_NOTICE':
            i = state.charts.findIndex(chart => chart.id === action.updatedNotice.chart_id)

            return {
                ...state, 
                charts: [...state.charts.slice(0, i),
                    {...state.charts[i], notices: [...state.charts[i].notices.filter(notice => notice.id !== action.updatedNotice.id), action.updatedNotice]
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




                case 'START_DOWNVOTE_NOTICE_REQUEST':
                    return {
                        ...state,
                        requesting: true
                    }
        
                case 'DOWNVOTE_NOTICE':
                    i = state.charts.findIndex(chart => chart.id === action.updatedNotice.chart_id)
        
                    return {
                        ...state, 
                        charts: [...state.charts.slice(0, i),
                            {...state.charts[i], notices: [...state.charts[i].notices.filter(notice => notice.id !== action.updatedNotice.id), action.updatedNotice]
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
