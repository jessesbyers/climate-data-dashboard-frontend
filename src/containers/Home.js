import React, { Component } from 'react';
import Chart from '../components/Chart'
import InteractButton from '../components/InteractButton'
import DropdownInput from '../components/DropdownInput'
import { fetchChartData } from '../actions/fetchChartData'




import { connect } from 'react-redux'

class Home extends Component {



    // get rid of state once store data is ready
    state = {
        urls: ["https://i.imgur.com/0CcaR6K.png", "https://i.imgur.com/hvyjE6g.png", "https://i.imgur.com/nBfhBVX.png"]
    }

    handleDropdownChange = (event) => {
        console.log("handle dropdown change function")
        console.log(event.target.value)
        this.setState({chart_url: event.target.value});
    }

    handleDropdownSubmit = (event) => {
        console.log("handle dropdown submit function")
        event.preventDefault()
        console.log(this.state.chart_url)
        console.log(this.props.fetchChartData)
        this.props.fetchChartData(this.state.chart_url)

    }

    renderNewChart = () => {
        {console.log(this.props)}
        {console.log(this.props.charts.attributes)}
        
    }

    render() {



        return (

            <div>
                
                <h1>Home Container Placeholder</h1>
                <p>loops through urls from state and renders chart component for each url</p>
                <DropdownInput handleDropdownChange={this.handleDropdownChange} handleDropdownSubmit={this.handleDropdownSubmit}/>
                {/* {this.state.urls.map((url, index) => {
                    return (
                        <div key={index}>
                            <Chart url={url}  />
                            <InteractButton url={url} />
                        </div>
                    )}
                )} */}
                {this.renderNewChart()}
{/* 
                {this.props.charts.attributes((chart, index) => {
                    return (
                        <div key={index}>
                            <Chart url={chart.screenshot_url}  />
                            <InteractButton url={chart.screenshot_url} />
                        </div>
                    )}
                )} */}
 
                {/* <Chart url={this.props.charts.attributes.screenshot_url}/> */}

                
            </div>
        );
    }
};

// need to revise to only pass down what is needed
const mapStateToProps = state => {
    return state
    // return {
    //   items: state.items
    // }
}

// const mapDispatchToProps = (dispatch) => {
//     console.log("inside dispatch")
//     return {fetchChartData: () => dispatch(fetchChartData())}
// }

export default connect (mapStateToProps, {fetchChartData})(Home)