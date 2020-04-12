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
            let remainingNotices = state.map(notice => {
                if (notice.id === action.notice_id) {
                    return action.notice_id
                } else {
                    return notice
                }
            })

            return remainingNotices




        case 'START_UPVOTE_NOTICE_REQUEST':
            return state

        case 'UPVOTE_NOTICE':
            let upvotedNotices = state.map(notice => {
                if (notice.id === action.updatedNotice.id) {
                    return action.updatedNotice
                } else {
                    return notice
                }
            })

            return upvotedNotices



        case 'START_DOWNVOTE_NOTICE_REQUEST':
            return state

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