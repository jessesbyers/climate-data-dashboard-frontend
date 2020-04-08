import React, { Component } from 'react';
import Chart from '../components/Chart'
import InteractButton from '../components/InteractButton'
import DropdownInput from '../components/DropdownInput'



import { connect } from 'react-redux'

class Home extends Component {



    // get rid of state once store data is ready
    state = {
        urls: ["https://i.imgur.com/0CcaR6K.png", "https://i.imgur.com/hvyjE6g.png", "https://i.imgur.com/nBfhBVX.png"]
    }



    render() {
        console.log(this)

        return (
            <div>
                <h1>Home Container Placeholder</h1>
                <p>loops through urls from state and renders chart component for each url</p>
                <DropdownInput />
                {this.state.urls.map((url, index) => {
                    return (
                        <div key={index}>
                            <Chart url={url}  />
                            <InteractButton url={url} />
                        </div>
                    )}
                )}
            </div>
        );
    }
};

// need to revise to only pass down what is needed
const mapStateToProps = state => {
    return state
    // return {
    //   items: state.items
    // }
  }

// export default Home;
export default connect (mapStateToProps)(Home)