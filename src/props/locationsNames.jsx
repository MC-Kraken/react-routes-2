import React from 'react'
import { Link } from 'react-router-dom';

export default function LocationsNames(props) {

    const { id, name } = props.film;

    return (
        <>
            <Link to={`/locations/${id}`}>
                <ul>
                    <li>{name}</li>
                </ul>
            </Link>
        </>
    )
}

