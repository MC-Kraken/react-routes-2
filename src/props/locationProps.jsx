import React from 'react'

export default function LocationProps(props) {

    const { name, climate, terrain, surface_water} = props.location;

    return (
        <>
            <ul>
                <li>Name: { name }</li>
                <li>Climate: { climate }</li>
                <li>Terrain: { terrain }</li>
                <li>Surface Water: { surface_water }</li>
            </ul>
        </>
    )
}