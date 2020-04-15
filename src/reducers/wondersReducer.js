export default function wondersReducer(state = [], action) {
    switch (action.type) {
        // beginning of fetch get request to retrieve wonders data when chart is loaded on data dashboard
        case 'START_FETCH_WONDERS_REQUEST':
            return state
        // adding results of get request to state.wonders array 
        case 'FETCH_WONDERS':
            return [...state, ...action.wonders]


        // beginning of fetch post request to add new wonder to the database
        case 'START_ADDING_ADDWONDER_REQUEST':
            return state
        // the new wonder is added to state.notices
        case 'ADD_WONDER':   
            return [...state, action.mutatedWonder]


        // beginning of fetch delete request to delete wonder from the database
        case 'START_DELETE_WONDER_REQUEST':
            return state
        // iterating through all of the wonders in state.wonders and filtering out the deleted wonder so it is not re-rendered
        case 'DELETE_WONDER': 
            let remainingWonders = state.map(wonder => {
                if (wonder.id === action.wonder_id) {
                    return action.wonder_id
                } else {
                    return wonder
                }
            })

            return remainingWonders




        // beginning of fetch patch request to update wonder in the database
        case 'START_UPVOTE_WONDER_REQUEST':
            return state
        // iterating through the wonders in state.wonders and updating only the wonder that has been voted
        case 'UPVOTE_WONDER':
            let upvotedWonders = state.map(wonder => {
                if (wonder.id === action.updatedWonder.id) {
                    return action.updatedWonder
                } else {
                    return wonder
                }
            })

            return upvotedWonders


        // beginning of fetch patch request to update wonder in the database
        case 'START_DOWNVOTE_WONDER_REQUEST':
            return state
        // iterating through the wonders in state.wonders and updating only the wonder that has been voted
        case 'DOWNVOTE_WONDER':
            let downvotedWonders = state.map(wonder => {
                if (wonder.id === action.updatedWonder.id) {
                    return action.updatedWonder
                } else {
                    return wonder
                }
            })

            return downvotedWonders
                    

        default:
    
            return state
    }
}