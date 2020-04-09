
// action adds new notice and wonder from state and persists them into database 
export const addNotice = ({content, votes, chart_id}) => {
    console.log("inside addNotice action")
    console.log(content)
    console.log(votes)
    console.log(chart_id)

    return dispatch => {
        dispatch({ type: 'START_ADDING_ADDNOTICE_REQUEST' })

        let notice ={content, votes, chart_id}
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(notice)
        };

        fetch(`http://localhost:3000/charts/${chart_id}/notices`, configObj)
        .then(function(response) {
            return response.json()
        })
        .then(notice => dispatch({ type: 'ADD_NOTICE', notice }))
        .catch(function(error) {
            alert("ERROR! Please Try Again");
            console.log(error.message);
        });

    }



   
}

export function addWonder(wonder) {
    console.log("inside addWonder action")
    console.log(wonder)
   
}