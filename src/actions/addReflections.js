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

        fetch(`http://localhost:3000/charts/${notice.chart_id}/notices`, configObj)
        .then(function(response) {
            return response.json()
        })
        .then(notice => {
            let mutatedNotice = {
                id: parseInt(notice.id),
                content: notice.content,
                votes: notice.votes,
                chart_id: notice.chart_id
            }
            dispatch({ type: 'ADD_NOTICE', mutatedNotice })})

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

        fetch(`http://localhost:3000/charts/${wonder.chart_id}/wonders`, configObj)
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