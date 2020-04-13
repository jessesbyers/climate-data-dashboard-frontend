import React, { Component } from 'react';
import { addDataSource} from '../actions/addDataSource'
import { connect } from 'react-redux'
import Chart from '../components/Chart'


class DataSourceInput extends Component {
    state = {
        name: "",
        data_url: "",
        screenshot_url: "",
        visible: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ visible: true})
    }

    handleSave = () => {
        this.props.addDataSource({name: this.state.name, data_url: this.state.data_url, screenshot_url: this.state.screenshot_url})
        this.setState({
            name: "",
            data_url: "",
            screenshot_url: "", 
            visible: false
        })

    }



    handleClick = () => {
        this.setState({ visible: true})
    }

    render() {
        console.log(this)

        if (this.state.visible === false) {
            return (
                <div>
                    <h3>Add a New Data Source</h3>
                    <form onSubmit={event => this.handleSubmit(event)}>
                        <label>Name of Data Source: </label>
                        <input type="text" name="name" value={this.state.name} onChange={event => this.handleChange(event)} placeholder="Name of Data Source"/><br/>
                        
                        <label>URL of Raw Data: </label>
                        <input type="text" name="data_url" value={this.state.data_url} onChange={event => this.handleChange(event)} placeholder="URL of Raw Data"/><br/>
                        
                        <label>URL of Data Image: </label>
                        <input type="text" name="screenshot_url" value={this.state.screenshot_url} onChange={event => this.handleChange(event)} placeholder=".png, .jpg, or .gif"/><br/>
                        
                        <input type="submit" value="Add Data Source" />


                    </form>

                </div>
            )
        } 
        else {
            return (
                <div>
                    <h3>Confirm your New Data Source</h3>
                    <Chart url={this.state.screenshot_url}/>
                    <input type="submit" value="Save Data Source to Database" onClick={this.handleSave}/>
                </div>
            )
        }        
    }

}

// need to revise to only pass down what is needed
const mapStateToProps = state => {
    // return state
    return {
      state
    }
}

export default connect (mapStateToProps, {addDataSource})(DataSourceInput)