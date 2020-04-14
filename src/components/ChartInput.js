import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addNotice } from '../actions/addReflections';
import { addWonder } from '../actions/addReflections';
import Notice from '../components/Notice'
import Wonder from '../components/Wonder'
import { NavLink } from 'react-router-dom';


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

                    <form onSubmit={event => this.handleSubmit(event)}>
                        <input type="text" name="notice" placeholder="I notice..." value={this.state.notice.content} onChange={event => this.handleChange(event)}/>
                        <input type="text" name="wonder" placeholder="I wonder..." value={this.state.wonder.content} onChange={event => this.handleChange(event)}/>
                        <button type="submit" className="btn">Add</button>
                    </form>
                </div>
            );
        } else if (this.state.visible === true && this.state.view === false) {
            return (
                <div>
                    <Notice notice={this.state.notice}/>
                    <Wonder wonder={this.state.wonder}/>
                    <input type="submit" value="Save Reflections to Database" onClick={this.handleSave}/>
                    <input type="submit" value="Cancel" onClick={this.handleCancel}/>

                </div>
            )


        } else if (this.state.view === true) {
            return (
                <div>
                    <NavLink 
                        style={{ marginRight: '10px' }} 
                        to={`/charts/${this.props.chart_id}/reflections`}
                        chart={this.props.chart}
                    >
                        View All Reflections For This Chart
                    </NavLink>
                </div>
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