import Chart from "../components/Chart"

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
            console.log("inside add notice reducer")    
            console.log(state.charts)
            console.log(action)
                    
            let index = state.charts.findIndex(chart => chart.id == action.mutatedNotice.chart_id)

            console.log(index)

            return {
                ...state,
                charts: [...state.charts.slice(0, index),
                    // need to figure out middle line
                    {
                    ...state.charts[index], notices: [...state.charts[index].notices, action.mutatedNotice]
                    // notices.concat(action.mutatedNotice), 
                    },

                    ...state.charts.slice(index + 1)
                ],
                requesting: false
            }

                   // state = {
                    //     charts: [ 
                    //         {
                    //             key: value, 
                    //             key: value, 
                    //             notices: [{}, {}], 
                    //             wonders: [{}, {}]
                    //         }, 

                    //         {
                    //             key: value, 
                    //             key: value, 
                    //             notices: [{}, {}], 
                    //             wonders: [{}, {}]
                    //         },
                    // }


                    // ...state.charts[index].notices, action.mutatedNotice,
                    // .concat(action.mutatedNotice),

        case 'START_ADDING_ADDWONDER_REQUEST':
            console.log("inside start_adding_wonder reducer")    
            console.log(action)

            return state

        case 'ADD_WONDER':
            console.log("inside add wonder reducer")    
            console.log(action)
            return state


        // case 'UPVOTE':
        //     return state


        default:
            return state
    }
}