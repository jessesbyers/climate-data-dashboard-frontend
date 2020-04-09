import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReflections } from '../actions/addReflections';


class ChartInput extends Component {

    state = {
        notice: {
            content: "", 
            votes: 1, 
            chart_id: this.props.chart_id
        },
        wonder: {
            content: "", 
            votes: 1, 
            chart_id: this.props.chart_id
        }
    }

    handleChange = (event) => {
        console.log(event.target)
        this.setState({
            [event.target.name]: {content: event.target.value, votes: 1, chart_id: this.props.chart_id}
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("inside handle submit")
        console.log(event.target)
        console.log(this.state)
    }
    render() {
        console.log(this)
    
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
    // return { notice: state.content, author: state.author }
    return state
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addReflections: (notice, wonder) => {
        dispatch(addReflections(notice, wonder))
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ChartInput);