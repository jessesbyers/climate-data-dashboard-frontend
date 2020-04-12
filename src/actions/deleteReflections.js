
export const deleteNotice = (chart_id, notice_id) => {
    console.log("inside delete notice action")
    console.log(notice_id)

    return dispatch => {
        dispatch({ type: 'START_DELETE_NOTICE_REQUEST' })

        let chartId = parseInt(chart_id)

        let configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        };

        fetch(`http://localhost:3000/charts/${chartId}/notices/${notice_id}`, configObj)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: 'DELETE_NOTICE', notice_id })
        })

        .catch(function(error) {
            alert("ERROR! Please Try Again");
            console.log(error.message);
        });
    }
}




export const deleteWonder = (chart_id, wonder_id) => {

    let chartId = parseInt(chart_id)

    return dispatch => {
        dispatch({ type: 'START_DELETE_WONDER_REQUEST' })

        let configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        };

        fetch(`http://localhost:3000/charts/${chartId}/wonders/${wonder_id}`, configObj)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: 'DELETE_WONDER', wonder_id })
        })

        .catch(function(error) {
            alert("ERROR! Please Try Again");
            console.log(error.message);
        });
    }
}