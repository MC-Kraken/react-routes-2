import React, { Component } from 'react';
import CharacterProps from '../props/characterProps';

class Character extends Component {

    constructor(props) {
        super(props);
        this.state = {
            character: []
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
            .then(res => res.json()) //convert json to js
            .then(character => this.setState({ character }));
    }

    render() {
        const character = this.state.character

        return (
                
            <>
                
                    <CharacterProps character={character} />
                
            </>

        )


    }

}


export default Character