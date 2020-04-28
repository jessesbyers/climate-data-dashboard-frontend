// both functions take in argument of object with form data, chart_id, and default votes
export const addNotice = (notice) => {

    return dispatch => {
        dispatch({ type: 'START_ADDING_ADDNOTICE_REQUEST' })
        
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(notice)
        };
        // fetch call made to nested route url to associate notice with correct chart
        fetch(`https://climate-dashboard-api.herokuapp.com/charts/${notice.chart_id}/notices`, configObj)
        .then(function(response) {
            return response.json()
        })
        .then(notice => {
            // small revision of response object so it will play well in the reducer

                let mutatedNotice = {
                    id: parseInt(notice.id),
                    content: notice.content,
                    votes: notice.votes,
                    chart_id: notice.chart_id
                }
                // dispatches action.type and object to noticeReducer to add new notice to state
                dispatch({ type: 'ADD_NOTICE', mutatedNotice })
    })

        .catch(function(error) {
            alert("ERROR! Please Try Again");
            console.log(error.message);
        });
    }
}

export function addWonder(wonder) {

    return dispatch => {
        dispatch({ type: 'START_ADDING_ADDWONDER_REQUEST' })
        
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(wonder)
        };

        fetch(`https://climate-dashboard-api.herokuapp.com/charts/${wonder.chart_id}/wonders`, configObj)
        .then(function(response) {
            return response.json()
        })
        .then(wonder => {
            let mutatedWonder = {
                id: parseInt(wonder.id),
                content: wonder.content,
                votes: wonder.votes,
                chart_id: wonder.chart_id
            }
            dispatch({ type: 'ADD_WONDER', mutatedWonder })})

        .catch(function(error) {
            alert("ERROR! Please Try Again");
            console.log(error.message);
        });
    }
}