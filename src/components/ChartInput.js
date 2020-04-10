import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNotice } from '../actions/addReflections';
import { addWonder } from '../actions/addReflections';

class ChartInput extends Component {

    state = {
        notice: {
            content: ""
        },
        wonder: {
            content: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: {content: event.target.value, votes: 1, chart_id: this.props.chart_id}
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addNotice(this.state.notice)
        this.props.addWonder(this.state.wonder)
        this.setState({
            notice: {content: ""},
            wonder: {content: ""}
        })
    }

    render() {
    
        return (
            <div>
                <h3>Add your Observations and Reflections Below</h3>

                <form onSubmit={event => this.handleSubmit(event)}>
                    <input type="text" name="notice" placeholder="I notice..." value={this.state.notice.content} onChange={event => this.handleChange(event)}/>
                    <input type="text" name="wonder" placeholder="I wonder..." value={this.state.wonder.content} onChange={event => this.handleChange(event)}/>
                    <button type="submit" className="btn">Add</button>
                </form>
            </div>
        );
    }
};

// need to revise with content
const mapStateToProps = (state) => {
    return { charts: state.charts }
    // return state
  }
  
  
export default connect(mapStateToProps, {addNotice, addWonder})(ChartInput);