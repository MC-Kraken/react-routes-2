import React, { Component } from 'react';
import OneSpeciesProps from '../props/oneSpeciesProps';

class OneSpecies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            species: []
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/species/${this.props.match.params.id}`)
            .then(res => res.json()) //convert json to js
            .then(species => this.setState({ species }));
    }

    render() {
        const species = this.state.species

        return (

            <>
                
                    <OneSpeciesProps spec={species} />
                
            </>

        )


    }

}


export default OneSpecies