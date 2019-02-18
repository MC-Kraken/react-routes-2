import React, { Component } from 'react';
import LocationsNames from '../props/locationsNames';

class Locations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locations: []
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/locations")
            .then(res => res.json()) //convert json to js
            .then(locations => this.setState({ locations }));
    }


    render() {

        const locations = this.state.locations

        return (
            <>
                <h1>Locations</h1>

                {locations.map((name, id) => {
                    return <LocationsNames key={id} film={name} />
                })}


            </>
        );
    }
}

export default Locations;



