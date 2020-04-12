export function fetchChartData(url) {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_CHARTDATA_REQUEST' });
      fetch(url)
        .then(response => response.json())
        .then(charts => {
          console.log(charts)
          let chart = {
            id: parseInt(charts.id),
            name: charts.name,
            data_url: charts.data_url,
            screenshot_url: charts.screenshot_url
          }
          dispatch({ type: 'ADD_CHARTDATA', chart })
      });
    };
  }

  export function fetchNotices(url) {
    return (dispatch) => {
      dispatch({ type: 'START_FETCH_NOTICES_REQUEST' });
      fetch(`${url}/notices`)
        .then(response => response.json())
        .then(notices => notices.map(notice => {return dispatch({ type: 'FETCH_NOTICES', notice })}))
        // .then(notices => dispatch({ type: 'FETCH_NOTICES', notices }))

          // console.log(notices)
           
          
        
    };
  }


  export function fetchWonders(url) {
    return (dispatch) => {
      dispatch({ type: 'START_FETCH_WONDERS_REQUEST' });
      fetch(`${url}/wonders`)
        .then(response => response.json())
        .then(wonders => wonders.map(wonder => {return dispatch({ type: 'FETCH_WONDERS', wonder })}))
    };
  }