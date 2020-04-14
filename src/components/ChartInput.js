import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addNotice } from '../actions/addReflections';
import { addWonder } from '../actions/addReflections';
import Notice from '../components/Notice'
import Wonder from '../components/Wonder'
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class ChartInput extends Component {

    state = {
        notice: {
            content: ""
        },
        wonder: {
            content: ""
        }, 
        visible: false,
        view:false
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: {content: event.target.value, votes: 1, chart_id: this.props.chart_id}
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ visible: true})
    }

    handleSave = () => {
        this.props.addNotice(this.state.notice)
        this.props.addWonder(this.state.wonder)
        this.setState({
            notice: {content: ""},
            wonder: {content: ""},
            visible: false, 
            view: true
        })

    }

    handleCancel = () => {
        this.setState({
            notice: {content: ""},
            wonder: {content: ""},
            visible: false, 
            view: false
        })
    }

    render() {
        console.log(this)
        if (this.state.visible === false && this.state.view === false) {
            return (
                <div>
                    <h3>Add your Observations and Reflections Below</h3>

                    <Form onSubmit={event => this.handleSubmit(event)}>
                        <Form.Group>
                            <Form.Control size="lg" type="text" name="notice" placeholder="I notice..." value={this.state.notice.content} onChange={event => this.handleChange(event)}/>
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Control size="lg" type="text" name="wonder" placeholder="I wonder..." value={this.state.wonder.content} onChange={event => this.handleChange(event)}/>
                        </Form.Group>
                        <Button type="submit" >Add</Button>
                    </Form>
                </div>
            );
        } else if (this.state.visible === true && this.state.view === false) {
            return (
                <div>
                    <Notice notice={this.state.notice}/>
                    <Wonder wonder={this.state.wonder}/>
                    <Button type="submit" onClick={this.handleSave}>Save Reflections to Database</Button>
                    <Button type="submit" variant="danger" onClick={this.handleCancel}>Cancel</Button>
                </div>
            )


        } else if (this.state.view === true) {
            return (
                    <NavLink 
                        style={{ marginRight: '10px'}, {backgroundColor: 'transparent'}} 
                        to={`/charts/${this.props.chart_id}/reflections`}
                        chart={this.props.chart}>
                        <Button size="lg" block>View All Reflections For This Chart</Button>  
                    </NavLink>
            )
        }
    }
};

const mapStateToProps = (state) => {
    return {
        chart: state.chart
    }
  }
  
  
export default connect(mapStateToProps, {addNotice, addWonder})(ChartInput);