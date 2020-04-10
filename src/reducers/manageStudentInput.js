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



        case 'START_UPVOTE_NOTICE_REQUEST':
            return {
                ...state,
                requesting: true
            }

        case 'UPVOTE_NOTICE':
            let ind = state.charts.findIndex(chart => chart.id === action.updatedNotice.chart_id)

            return {
                ...state, 
                charts: [...state.charts.slice(0, ind),
                    {...state.charts[ind], notices: [...state.charts[ind].notices.filter(notice => notice.id !== action.updatedNotice.id), action.updatedNotice]
                    },
                    ...state.charts.slice(ind + 1)
                ],
                requesting: false
            }





            case 'START_UPVOTE_WONDER_REQUEST':
                return {
                    ...state,
                    requesting: true
                }
    
            case 'UPVOTE_WONDER':
                let inde = state.charts.findIndex(chart => chart.id === action.updatedWonder.chart_id)
    
                return {
                    ...state, 
                    charts: [...state.charts.slice(0, inde),
                        {...state.charts[inde], wonders: [...state.charts[inde].wonders.filter(wonder => wonder.id !== action.updatedWonder.id), action.updatedWonder]
                        },
                        ...state.charts.slice(inde + 1)
                    ],
                    requesting: false
                }




                case 'START_DOWNVOTE_NOTICE_REQUEST':
                    return {
                        ...state,
                        requesting: true
                    }
        
                case 'DOWNVOTE_NOTICE':
                    let ndx = state.charts.findIndex(chart => chart.id === action.updatedNotice.chart_id)
        
                    return {
                        ...state, 
                        charts: [...state.charts.slice(0, ndx),
                            {...state.charts[ndx], notices: [...state.charts[ndx].notices.filter(notice => notice.id !== action.updatedNotice.id), action.updatedNotice]
                            },
                            ...state.charts.slice(ndx + 1)
                        ],
                        requesting: false
                    }



                    case 'START_DOWNVOTE_WONDER_REQUEST':
                        return {
                            ...state,
                            requesting: true
                        }
            
                    case 'DOWNVOTE_WONDER':
                        let dx = state.charts.findIndex(chart => chart.id === action.updatedWonder.chart_id)
            
                        return {
                            ...state, 
                            charts: [...state.charts.slice(0, dx),
                                {...state.charts[dx], wonders: [...state.charts[dx].wonders.filter(wonder => wonder.id !== action.updatedWonder.id), action.updatedWonder]
                                },
                                ...state.charts.slice(dx + 1)
                            ],
                            requesting: false
                        }





        default:
            return state
    }
}