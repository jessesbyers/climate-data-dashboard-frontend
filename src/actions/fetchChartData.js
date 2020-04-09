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
            id: charts.data.id,
            name: charts.data.attributes.name,
            data_url: charts.data.attributes.data_url,
            screenshot_url: charts.data.attributes.screenshot_url,
            notices: charts.data.attributes.notices,
            wonders: charts.data.attributes.wonders
          }
          console.log(chart)
          // let mutatedCharts = (destructure and get just the parts we need, then replace charts with mutatedCharts)
          // dispatch({ type: 'ADD_CHARTDATA', charts })
          dispatch({ type: 'ADD_CHARTDATA', chart })

      
      });
    };
  }