export default function wondersReducer(state = [], action) {
    switch (action.type) {
        case 'START_FETCH_WONDERS_REQUEST':
            return state

        case 'FETCH_WONDERS':
            return [...state, ...action.wonders]



        case 'START_ADDING_ADDWONDER_REQUEST':
            return state

        case 'ADD_WONDER':   
            return [...state, action.mutatedWonder]



        case 'START_DELETE_WONDER_REQUEST':
            return state

        case 'DELETE_WONDER': 
            let remainingWonders = state.map(wonder => {
                if (wonder.id === action.wonder_id) {
                    return action.wonder_id
                } else {
                    return wonder
                }
            })

            return remainingWonders





        case 'START_UPVOTE_WONDER_REQUEST':
            return state

        case 'UPVOTE_WONDER':
            let upvotedWonders = state.map(wonder => {
                if (wonder.id === action.updatedWonder.id) {
                    return action.updatedWonder
                } else {
                    return wonder
                }
            })

            return upvotedWonders



        case 'START_DOWNVOTE_WONDER_REQUEST':
            return state

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