import React, { Component } from 'react';
import { addDataSource} from '../actions/addDataSource'
import { connect } from 'react-redux'
import Chart from '../components/Chart'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';



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

const mapStateToProps = state => {
    return {
      state
    }
}

export default connect (mapStateToProps, {addDataSource})(DataSourceInput)