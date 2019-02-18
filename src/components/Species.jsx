import React, { Component } from 'react';
import SpeciesNames from '../props/speciesNames';

class Species extends Component {

    constructor(props) {
        super(props);
        this.state = {
            species: []
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/species`)
            .then(res => res.json()) //convert json to js
            .then(species => this.setState({ species }));
    }

    render() {
        const species = this.state.species

        return (

            <>
                <h1>Species</h1>

                {species.map((name, id) => {
                    return <SpeciesNames key={id} species={name} />
                })}
            </>

        )


    }

}


export default Species