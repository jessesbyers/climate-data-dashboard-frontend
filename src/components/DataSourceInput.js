import React, { Component } from 'react';
import { addDataSource} from '../actions/addDataSource'
import { connect } from 'react-redux'

class DataSourceInput extends Component {
    state = {
        name: "",
        data_url: "",
        screenshot_url: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addDataSource(this.state)
        this.setState({
            name: "",
            data_url: "",
            screenshot_url: ""
        })

    }

    render() {
        console.log(this)
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input type="text" name="name" value={this.state.name} onChange={event => this.handleChange(event)} placeholder="Name of Data Source"/>
                    <input type="text" name="data_url" value={this.state.data_url} onChange={event => this.handleChange(event)} placeholder="URL of Raw Data"/>
                    <input type="text" name="screenshot_url" value={this.state.screenshot_url} onChange={event => this.handleChange(event)} placeholder="URL of Data Image (.png, .jpg, or .gif)"/>
                    <input type="submit" value="Add Data Source" />
                </form>
            </div>
        )
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