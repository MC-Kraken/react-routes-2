import React, { Component } from 'react';

class films extends Component {

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films") 
        .then((response) => {
            return response.json();
        })
        .then((obj) => console.log(obj));
    }

        
    render() {
        return (
            <h1>Howl's Moving Castle, Spirited Away, Princess Mononoke</h1>
        );
    }
}

export default films;



