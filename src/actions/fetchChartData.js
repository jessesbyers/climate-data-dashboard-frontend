// action fetches chart data from rails API so that chart images will be 
// saved to state and can be rendered on dashboard
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
      dispatch({ type: 'START_ADDING_NOTICE_REQUEST' });
      fetch(`${url}/notices`)
        .then(response => response.json())
        .then(notices => {
          notices.map(notice => dispatch({ type: 'ADD_NOTICES', notice })) 
        })
    };
  }


  export function fetchWonders(url) {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_WONDER_REQUEST' });
      fetch(`${url}/wonders`)
        .then(response => response.json())
        .then(wonders => {
          wonders.map(wonder => dispatch({ type: 'ADD_WONDERS', wonder })) 
        })
    };
  }