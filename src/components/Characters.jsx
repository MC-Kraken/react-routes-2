import React, { Component } from 'react';
import CharactersNames from '../props/charactersNames';

class Characters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            characters: []
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json()) //convert json to js
            .then(characters => this.setState({ characters }));
    }


    render() {

        const characters = this.state.characters

        return (
            <>
                <h1>Characters</h1>

                {characters.map((name, id) => {
                    return <CharactersNames key={id} film={name} />
                })}


            </>
        );
    }
}

export default Characters;



