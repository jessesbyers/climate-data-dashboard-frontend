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

            // let chart = state.charts.map((chart, index) => {
            //     if (chart.id == action.notice.chart_id){
            //     })
            //     }

            return {
                charts: state.charts.notices.concat(action.mutatedNotice), 
                requesting: false
            }


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