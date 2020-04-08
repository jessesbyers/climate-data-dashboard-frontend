// action fetches chart data from rails API so that chart images will be 
// saved to state and can be rendered on dashboard
export function fetchChartData(url) {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_CHARTDATA_REQUEST' });
      fetch(url)
        .then(response => response.json())
        .then(charts => dispatch({ type: 'ADD_CHARTDATA', charts }));
    };
  }