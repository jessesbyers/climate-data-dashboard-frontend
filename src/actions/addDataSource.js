// recieves argument of an object with form data(name and urls)
export const addDataSource = (dataSource) => {

    return dispatch => {
        dispatch({ type: 'START_ADDING_DATA_SOURCE_REQUEST' })
        
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(dataSource)
        };

        fetch(`https://climate-dashboard-api.herokuapp.com/charts`, configObj)
        .then(function(response) {
            return response.json()
        })
        // dispatches action.type and data object to charts reducer after recieving json response from front end
        .then(data => {
        console.log(data)
            dispatch({ type: 'ADD_DATA_SOURCE', data })})

        .catch(function(error) {
            alert("ERROR! Please Try Again");
            console.log(error.message);
        });
    }
}