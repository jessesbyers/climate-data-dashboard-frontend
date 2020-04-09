
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
        .then(notice => {
            console.log(notice)
            let mutatedNotice = {
                id: parseInt(notice.data.id),
                content: notice.data.attributes.content,
                votes: notice.data.attributes.votes,
                chart_id: notice.data.attributes.chart.id
            }
            console.log(mutatedNotice)
            dispatch({ type: 'ADD_NOTICE', mutatedNotice })})

        .catch(function(error) {
            alert("ERROR! Please Try Again");
            console.log(error.message);
        });
    }
}

export function addWonder({content, votes, chart_id}) {
    console.log("inside addWonder action")

    return dispatch => {
        dispatch({ type: 'START_ADDING_ADDWONDER_REQUEST' })

        let wonder ={content, votes, chart_id}
        
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(wonder)
        };

        fetch(`http://localhost:3000/charts/${chart_id}/wonders`, configObj)
        .then(function(response) {
            return response.json()
        })
        .then(wonder => {
            console.log(wonder)
            let mutatedWonder = {
                id: parseInt(wonder.data.id),
                content: wonder.data.attributes.content,
                votes: wonder.data.attributes.votes,
                chart_id: wonder.data.attributes.chart.id
            }
            console.log(mutatedWonder)
            dispatch({ type: 'ADD_WONDER', mutatedWonder })})

        .catch(function(error) {
            alert("ERROR! Please Try Again");
            console.log(error.message);
        });
    }
   
}