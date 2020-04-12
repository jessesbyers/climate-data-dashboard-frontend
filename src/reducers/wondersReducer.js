export default function wondersReducer(state = [], action) {
    switch (action.type) {
        case 'START_FETCH_WONDERS_REQUEST':
            console.log("inside wonders fetch")
            return state

        case 'FETCH_WONDERS':
            console.log(action)
            return [...state, action.wonder]

        default:
    
            return state
    }
}