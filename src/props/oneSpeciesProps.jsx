import React from 'react'

export default function OneSpeciesProps(props) {

    const { name, classification, eye_colors, hair_colors } = props.spec;

    return (
        <>
            <ul>
                <li>Name: {name}</li>
                <li>Classification: {classification}</li>
                <li>Eye Color: {eye_colors}</li>
                <li>Hair Color: {hair_colors} </li>
            </ul>
        </>
    )
}