import React, { Component } from 'react';
import FilmsTitles from '../props/filmsTitles';

class Films extends Component {

    constructor(props) {
        super(props);
        this.state = {
            films: []
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json()) //convert json to js
            .then(films => this.setState({ films }));
    }


    render() {

        const films = this.state.films

        return (
            <>
                <h1>Films</h1>

                {films.map((title, id) => {
                    return <FilmsTitles key={id} film={title} />
                })}


            </>
        );
    }
}

export default Films;



