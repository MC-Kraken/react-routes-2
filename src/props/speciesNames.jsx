import React from 'react'
import { Link } from 'react-router-dom';

export default function SpeciesNames(props) {

    const { id, name } = props.species;

    return (
        <>
            <Link to={`/species/${id}`}>
                <ul>
                    <li>{name}</li>
                </ul>
            </Link>
        </>
    )
}