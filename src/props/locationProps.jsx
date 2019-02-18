import React from 'react'

export default function LocationProps(props) {

    const { name, climate, terrain, surface_water, residents, films } = props.location;

    return (
        <>
            <ul>
                <li>Name: { name }</li>
                <li>Climate: { climate }</li>
                <li>Terrain: { terrain }</li>
                <li>Surface Water: { surface_water }</li>
                <li>Residents: { residents }</li>
                <li>Film: { films }</li>
            </ul>
        </>
    )
}