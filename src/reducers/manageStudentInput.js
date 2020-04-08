// probably need to revise initial state
export default function manageStudenInput(state = {charts: [], requesting: false}, action) {
    switch (action.type) {
        // placeholder: need to define
        case 'START_ADDING_CHARTDATA_REQUEST':
            return {
                ...state,
                charts: [...state.charts],
                requesting: true
            }

        case 'ADD_CHARTDATA':
            console.log(action.charts.data)
            return {
                charts: state.charts.concat(action.charts.data),
                requesting: false
            }

        // case 'ADD_NOTICE':

        //     return state

        // case 'ADD_WONDER':
        //     return state


        // case 'UPVOTE':
        //     return state


        default:
            return state

    }

}