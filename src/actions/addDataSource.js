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

        fetch(`http://localhost:3000/charts`, configObj)
        .then(function(response) {
            return response.json()
        })
        .then(data => {
        console.log(data)
            dispatch({ type: 'ADD_DATA_SOURCE', data })})

        .catch(function(error) {
            alert("ERROR! Please Try Again");
            console.log(error.message);
        });
    }
}