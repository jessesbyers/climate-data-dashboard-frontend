export default function noticesReducer(state = [], action) {
    switch (action.type) {
        // beginning of fetch get request to retrieve notices data when chart is loaded on data dashboard
        case 'START_FETCH_NOTICES_REQUEST':
            return state
        // adding results of get request from database to state.notices array 
        case 'FETCH_NOTICES':
            return [...state, ...action.notices]


        // beginning of fetch post request to add new notice to the database
        case 'START_ADDING_ADDNOTICE_REQUEST':
            return state
        // the new notice is added to state.notices
        case 'ADD_NOTICE':  
            return [...state, action.mutatedNotice]



        // beginning of fetch delete request to delete notice from the database
        case 'START_DELETE_NOTICE_REQUEST':
            return state
        // iterating through all of the notices in state.notices and filtering out the deleted notice so it is not re-rendered
        case 'DELETE_NOTICE': 
            let remainingNotices = state.map(notice => {
                if (notice.id === action.notice_id) {
                    return action.notice_id
                } else {
                    return notice
                }
            })

            return remainingNotices



        // beginning of fetch patch request to update notice in the database
        case 'START_UPVOTE_NOTICE_REQUEST':
            return state
        // iterating through the notices in state.notices and updating only the notice that has been voted
        case 'UPVOTE_NOTICE':
            let upvotedNotices = state.map(notice => {
                if (notice.id === action.updatedNotice.id) {
                    return action.updatedNotice
                } else {
                    return notice
                }
            })

            return upvotedNotices


        // beginning of fetch patch request to update notice in the database
        case 'START_DOWNVOTE_NOTICE_REQUEST':
            return state
        // iterating through the notices in state.notices and updating only the notice that has been voted
        case 'DOWNVOTE_NOTICE':
            let downvotedNotices = state.map(notice => {
                if (notice.id === action.updatedNotice.id) {
                    return action.updatedNotice
                } else {
                    return notice
                }
            })

            return downvotedNotices



        default:
            return state
    }
}