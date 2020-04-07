import React, { Component } from 'react';
import Chart from '../components/Chart'

class Home extends Component {

    state = {
        urls: ["https://i.imgur.com/0CcaR6K.png", "https://i.imgur.com/hvyjE6g.png", "https://i.imgur.com/nBfhBVX.png"]
    }
    render() {
        console.log(this)

        return (
            <div>
                <h1>Home Container Placeholder</h1>
                {this.state.urls.map(url => <Chart url={url}/>)}
            </div>
        );
    }
};

export default Home;