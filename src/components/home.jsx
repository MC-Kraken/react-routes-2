import React, { Component } from 'react';

class Home extends Component {

    componentDidMount() {
        console.log(this.props.match);
    }
        
    render() {
        return (
            <h1>Studio Ghibli Wiki</h1>
        );
    }
}

export default Home;