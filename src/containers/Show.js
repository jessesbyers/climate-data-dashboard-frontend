import React, { Component } from 'react';
import Chart from '../components/Chart'
import Notices from '../components/Notices'
import Wonders from '../components/Wonders'
import { NavLink } from 'react-router-dom';
import { deleteNotice, deleteWonder } from '../actions/deleteReflections'
import { upvoteNotice, upvoteWonder, downvoteNotice, downvoteWonder } from '../actions/updateVotes'

import { connect } from 'react-redux'

class Show extends Component {

    render() {
        console.log(this.props)
        const chart = this.props.charts.find(chart => {return chart.id === parseInt(this.props.match.params.id)})

        if (chart) {

            return (
                <div>
                    <Chart url={chart.screenshot_url}/>

                    <NavLink 
                        to={`/charts/${chart.id}/interact`}
                    >
                        Interact
                    </NavLink>

                    <Notices chart={chart} deleteNotice={this.props.deleteNotice} upvoteNotice={this.props.upvoteNotice} downvoteNotice={this.props.downvoteNotice}/>
                    <Wonders chart={chart} deleteWonder={this.props.deleteWonder} upvoteWonder={this.props.upvoteWonder} downvoteWonder={this.props.downvoteWonder}/>
                
                </div>
            );
        } else {
            return (
                <div>
                    <NavLink 
                        style={{ marginRight: '10px' }} 
                        to="/"
                    >
                        <h1>Set Up a Data Dashboard to Get Started</h1>
                        <h3>Click Here</h3>
                    </NavLink>
                </div>
            )
        }
    }
};

// need to revise to only pass down what is needed
const mapStateToProps = state => {
    return {
      state
    }
  }

export default connect (mapStateToProps, {deleteNotice, deleteWonder, upvoteNotice, upvoteWonder, downvoteNotice, downvoteWonder})(Show)