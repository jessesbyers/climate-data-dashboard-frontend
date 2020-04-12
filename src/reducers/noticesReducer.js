export default function noticesReducer(state = [], action) {

    let i 
    switch (action.type) {
        case 'START_FETCH_NOTICES_REQUEST':
            return state

        case 'FETCH_NOTICES':
            return [...state, action.notice]



        case 'START_ADDING_ADDNOTICE_REQUEST':
            return state

        case 'ADD_NOTICE':  
            return [...state, action.mutatedNotice]




        case 'START_DELETE_NOTICE_REQUEST':
            return state

        case 'DELETE_NOTICE': 
        console.log("inside delete notice reducer")
        console.log(state)
        console.log(action)
            let remainingNotices = state.map(notice => {
                if (notice.id === action.notice_id) {
                    return action.notice_id
                } else {
                    return notice
                }
            })

            return remainingNotices



// need to revise below 


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


            default:
                return state
    }
}