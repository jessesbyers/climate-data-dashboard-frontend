export const upvoteNotice = (chart_id, notice) => {
    console.log("inside upvote notice action")
    console.log(notice)

    let updatedNotice = {
        id: notice.id,
        content: notice.content,
        votes: notice.votes + 1,
        chart_id: chart_id
    }

    return dispatch => {
        dispatch({ type: 'START_UPVOTE_NOTICE_REQUEST' })

        let configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({updatedNotice})
        };

        fetch(`http://localhost:3000/charts/${chart_id}/notices/${notice.id}`, configObj)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            dispatch({ type: 'UPVOTE_NOTICE', updatedNotice })
        })

        .catch(function(error) {
            alert("ERROR! Please Try Again");
            console.log(error.message);
        });
    }

}

export const upvoteWonder = (chart_id, wonder) => {
    console.log("inside upvote wonder action")

    let updatedWonder = {
        id: wonder.id,
        content: wonder.content,
        votes: wonder.votes + 1,
        chart_id: chart_id
    }

    return dispatch => {
        dispatch({ type: 'START_UPVOTE_WONDER_REQUEST' })

        let configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({updatedWonder})
        };

        fetch(`http://localhost:3000/charts/${chart_id}/wonders/${wonder.id}`, configObj)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            dispatch({ type: 'UPVOTE_WONDER', updatedWonder })
        })

        .catch(function(error) {
            alert("ERROR! Please Try Again");
            console.log(error.message);
        });
    }
}





export const downvoteNotice = (chart_id, notice) => {
    console.log("inside downvote notice action")
    console.log("inside upvote notice action")
    console.log(notice)

    let updatedNotice = {
        id: notice.id,
        content: notice.content,
        votes: notice.votes - 1,
        chart_id: chart_id
    }

    return dispatch => {
        dispatch({ type: 'START_UPVOTE_NOTICE_REQUEST' })

        let configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({updatedNotice})
        };

        fetch(`http://localhost:3000/charts/${chart_id}/notices/${notice.id}`, configObj)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            dispatch({ type: 'UPVOTE_NOTICE', updatedNotice })
        })

        .catch(function(error) {
            alert("ERROR! Please Try Again");
            console.log(error.message);
        });
    }
}

export const downvoteWonder = (chart_id, wonder) => {
    console.log("inside downvote wonder action")


    let updatedWonder = {
        id: wonder.id,
        content: wonder.content,
        votes: wonder.votes - 1,
        chart_id: chart_id
    }

    return dispatch => {
        dispatch({ type: 'START_DOWNVOTE_WONDER_REQUEST' })

        let configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({updatedWonder})
        };

        fetch(`http://localhost:3000/charts/${chart_id}/wonders/${wonder.id}`, configObj)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            dispatch({ type: 'DOWNVOTE_WONDER', updatedWonder })
        })

        .catch(function(error) {
            alert("ERROR! Please Try Again");
            console.log(error.message);
        });
    }
}



