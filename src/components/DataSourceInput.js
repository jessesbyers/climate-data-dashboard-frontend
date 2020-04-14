import React, { Component } from 'react';
import { addDataSource} from '../actions/addDataSource'
import { connect } from 'react-redux'
import Chart from '../components/Chart'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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

    handleCancel = () => {
        this.setState({
            name: "",
            data_url: "",
            screenshot_url: "", 
            visible: false
        })
    }

    render() {
        console.log(this)

        if (this.state.visible === false) {
            return (
                <div>
                    <h3>Add a New Data Source</h3>
                    <Form onSubmit={event => this.handleSubmit(event)}>
                        <Form.Group>
                            <Form.Label>Name of Data Source: </Form.Label>
                            <Form.Control size="lg" type="text" name="name" value={this.state.name} onChange={event => this.handleChange(event)} placeholder="Name of Data Source"/>
                        {/* <input type="text" name="name" value={this.state.name} onChange={event => this.handleChange(event)} placeholder="Name of Data Source"/><br/> */}
                            {/* </Form.Control> */}
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>URL of Raw Data: </Form.Label>
                            <Form.Control size="lg" type="text" name="data_url" value={this.state.data_url} onChange={event => this.handleChange(event)} placeholder="URL of Raw Data"/>
                                {/* <input type="text" name="data_url" value={this.state.data_url} onChange={event => this.handleChange(event)} placeholder="URL of Raw Data"/><br/> */}
                            {/* </Form.Control> */}
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>URL of Data Image: </Form.Label>
                            <Form.Control size="lg" type="text" name="screenshot_url" value={this.state.screenshot_url} onChange={event => this.handleChange(event)} placeholder=".png, .jpg, or .gif"/>
                            {/* <input type="text" name="screenshot_url" value={this.state.screenshot_url} onChange={event => this.handleChange(event)} placeholder=".png, .jpg, or .gif"/><br/> */}
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit">Add Data Source</Button>
                        </Form.Group>
                    </Form>

                </div>
            )
        } 
        else {
            return (
                <div>
                    <h3>Confirm your New Data Source</h3>
                    <Button type="submit" onClick={this.handleSave}>Save Data Source to Database</Button>
                    <Button type="submit" variant="danger" onClick={this.handleCancel}>Cancel</Button>
                    {/* <input type="submit" value="Save Data Source to Database" onClick={this.handleSave}/>
                    <input type="submit" value="Cancel" onClick={this.handleCancel}/> */}
                    <Chart chart={this.state}/>


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