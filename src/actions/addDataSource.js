export const addDataSource = (dataSource) => {

    // return dispatch => {
    //     dispatch({ type: 'START_ADDING_ADDNOTICE_REQUEST' })
        
    //     let configObj = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify(notice)
    //     };

    //     fetch(`http://localhost:3000/charts/${notice.chart_id}/notices`, configObj)
    //     .then(function(response) {
    //         return response.json()
    //     })
    //     .then(notice => {
    //         let mutatedNotice = {
    //             id: parseInt(notice.id),
    //             content: notice.content,
    //             votes: notice.votes,
    //             chart_id: notice.chart_id
    //         }
    //         dispatch({ type: 'ADD_NOTICE', mutatedNotice })})

    //     .catch(function(error) {
    //         alert("ERROR! Please Try Again");
    //         console.log(error.message);
    //     });
    // }
}