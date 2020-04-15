// url passed in as argument will be used to fetch the correct chart when it is chosed in the dropdown menu
export function fetchChartData(url) {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_CHARTDATA_REQUEST' });

      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          let chart = {
            id: parseInt(data.id),
            name: data.name,
            data_url: data.data_url,
            screenshot_url: data.screenshot_url
          }
          dispatch({ type: 'ADD_CHARTDATA', chart })
      });
    };
  }

  // url associates notices with the correct chart for fetch request
  export function fetchNotices(url) {
    return (dispatch) => {
      dispatch({ type: 'START_FETCH_NOTICES_REQUEST' });
      fetch(`${url}/notices`)
        .then(response => response.json())
        .then(notices => dispatch({ type: 'FETCH_NOTICES', notices }))
    };
  }

  // url associates wonders with the correct chart for fetch request
  export function fetchWonders(url) {
    return (dispatch) => {
      dispatch({ type: 'START_FETCH_WONDERS_REQUEST' });
      fetch(`${url}/wonders`)
        .then(response => response.json())
        .then(wonders => dispatch({ type: 'FETCH_WONDERS', wonders }))
    };
  }