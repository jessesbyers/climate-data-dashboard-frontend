// component provides built-in methods and attributes for components, including lifecycle methods, render(), constructor()
import React, { Component } from 'react';

// importing actions from local files
import { addNotice } from '../actions/addReflections';
import { addWonder } from '../actions/addReflections';

// importing components from local files
import Notice from '../components/Notice'
import Wonder from '../components/Wonder'

// allows us to enable routing by updating the browser url and rendering the appropriate component listed in the Router in App.js
import { NavLink } from 'react-router-dom';

// bootstrap components for css styling
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// enables this component to access state data from the redux store if component is wrapped with connect
import { connect } from 'react-redux';

class ChartInput extends Component {

    // initial state has placeholders for form input, 
    // as well as keys to direct what content is visible in the render function based on user actions
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

    // state is updated every time the form value changes. Default values for chart_id and votes are assigned.
    handleChange = (event) => {
        this.setState({
            [event.target.name]: {content: event.target.value, votes: 1, chart_id: this.props.chart_id}
        })
    }

    // the visible key is reset to true to show a confirmation message before calling the fetch action.
    handleSubmit = (event) => {
        event.preventDefault()
            this.setState({ visible: true})
    }

    // The addNotice and addWonder actions are called, which triggers the POST fetch request for the notice and the wonder
    // state is reset to initial values
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

    // if user cancels the submission, state is reset to initial values without triggering the actions and fetches
    handleCancel = () => {
        this.setState({
            notice: {content: ""},
            wonder: {content: ""},
            visible: false, 
            view: false
        })
    }

    render() {
        // conditional logic looks to values in local state to determine which content to return based on user interaction
        const validated = this.state.notice.content.length > 20 && this.state.wonder.content.length > 20;

        if (this.state.visible === false && this.state.view === false) {
            // renders form and chart
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
                                
                                <Button disabled={!validated} type="submit" >Add</Button>
                            </Form>
                        </div>
                    );
               
        } else if (this.state.visible === true && this.state.view === false) {
            // renders draft reflections and asks for confirmation before saving
            return (
                <div>
                    <Notice notice={this.state.notice}/>
                    <Wonder wonder={this.state.wonder}/>
                    <Button type="submit" onClick={this.handleSave}>Save Reflections to Database</Button>
                    <Button type="submit" variant="danger" onClick={this.handleCancel}>Cancel</Button>
                </div>
            )


        } else if (this.state.view === true) {
            // after saving, user can now navigate to view all reflections
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

// the only part of state that this component needs is the individual chart that reflections will be associated with
const mapStateToProps = (state) => {
    return {
        chart: state.chart
    }
  }
  
// shorthand for mapDispatchToProps for addNotice and addWonder actions
export default connect(mapStateToProps, {addNotice, addWonder})(ChartInput);