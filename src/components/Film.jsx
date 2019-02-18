import React, { Component } from 'react';
import FilmProps from '../props/filmProps';

class Film extends Component {

    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then(res => res.json()) //convert json to js
            .then(films => this.setState({ films }));
    }

    render() {
        const films = this.state.films

        return (

            <>
                
                    <FilmProps film={films} />
                
            </>

        )


    }

}


export default Film