
export const deleteNotice = (chart_id, notice_id) => {
    console.log("inside delete notice action")

    return dispatch => {
        dispatch({ type: 'START_DELETE_NOTICE_REQUEST' })

        let configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        };

        fetch(`http://localhost:3000/charts/${chart_id}/notices/${notice_id}`, configObj)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            dispatch({ type: 'DELETE_NOTICE', chart_id, notice_id })
        })

        .catch(function(error) {
            alert("ERROR! Please Try Again");
            console.log(error.message);
        });
    }
}




export const deleteWonder = (chart_id, wonder_id) => {
    console.log("inside delete wonder action")

    return dispatch => {
        dispatch({ type: 'START_DELETE_WONDER_REQUEST' })

        let configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        };

        fetch(`http://localhost:3000/charts/${chart_id}/wonders/${wonder_id}`, configObj)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            dispatch({ type: 'DELETE_WONDER', chart_id, wonder_id })
        })

        .catch(function(error) {
            alert("ERROR! Please Try Again");
            console.log(error.message);
        });
    }
}