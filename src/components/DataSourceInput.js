// component provides built-in methods and attributes for components, including lifecycle methods, render(), constructor()
import React, { Component } from 'react';

// importing actions from local files
import { addDataSource} from '../actions/addDataSource'

// importing components from local files
import Chart from '../components/Chart'

// bootstrap components for css styling
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

// enables this component to access state data from the redux store if component is wrapped with connect
import { connect } from 'react-redux'



class DataSourceInput extends Component {
    // initial state has placeholders for form input, 
    // as well as key to direct what content is visible in the render function based on user actions
    state = {
        name: "",
        data_url: "",
        screenshot_url: "",
        visible: false
    }

    // state is updated every time the form value changes. Default values for chart_id and votes are assigned.
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // the visible key is reset to true to show a confirmation message before calling the fetch action.
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ visible: true})
    }

    // The addDataSource action is called, which triggers the POST fetch request for the new chart
    // state is reset to initial values
    handleSave = () => {
        this.props.addDataSource({name: this.state.name, data_url: this.state.data_url, screenshot_url: this.state.screenshot_url})
        this.setState({
            name: "",
            data_url: "",
            screenshot_url: "", 
            visible: false
        })
    }

    // state.visible is changed to true to show confirmation prompt
    handleClick = () => {
        this.setState({ visible: true})
    }

    // state is reset to initial values without sending the post fetch request
    handleCancel = () => {
        this.setState({
            name: "",
            data_url: "",
            screenshot_url: "", 
            visible: false
        })
    }

    render() {
        // conditional logic looks to values in local state to determine which content to return

        if (this.state.visible === false) {
            // renders form to input new data source
            return (
                <Card>
                    <Card.Header>Add a New Data Source</Card.Header>
                    <Form onSubmit={event => this.handleSubmit(event)}>
                        <Form.Group>
                            <Form.Control size="lg" type="text" name="name" value={this.state.name} onChange={event => this.handleChange(event)} placeholder="Name of Data Source"/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Control size="lg" type="text" name="data_url" value={this.state.data_url} onChange={event => this.handleChange(event)} placeholder="URL of Raw Data"/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Control size="lg" type="text" name="screenshot_url" value={this.state.screenshot_url} onChange={event => this.handleChange(event)} placeholder="URL of Data Image: (.png, .jpg, or .gif)"/>
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit">Add Data Source</Button>
                        </Form.Group>
                    </Form>
                </Card>
            )
        } 
        else {
            // returns draft of input data from local state and asks for confirmation before sending fetch request 
            return (
                <Card>
                    <Card.Header>Confirm your New Data Source</Card.Header>
                    <Card.Text>
                        <Button type="submit" onClick={this.handleSave}>Save Data Source to Database</Button>
                        <Button type="submit" variant="danger" onClick={this.handleCancel}>Cancel</Button>
                    </Card.Text>
                    <Chart chart={this.state}/>
                </Card>
            )
        }        
    }
}

// nothing needs to be added to props for this component
// shorthand for mapDispatchToProps for addDataSource action
export default connect (null, {addDataSource})(DataSourceInput)