import React, { Component } from 'react';

class home extends Component {

    componentDidMount() {
        console.log(this.props.match);
    }
        
    render() {
        return (
            <h1>Home</h1>
        );
    }
}

export default home;