import React, { Component } from 'react';
import LocationProps from '../props/locationProps';

class Location extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: []
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/locations/${this.props.match.params.id}`)
            .then(res => res.json()) //convert json to js
            .then(location => this.setState({ location }));
    }

    render() {
        const location = this.state.location

        return (

            <>
                
                    <LocationProps location={location} />
                
            </>

        )


    }

}


export default Location