import React from 'react'
import { Link } from 'react-router-dom';

export default function CharactersNames(props) {

    const { id, name } = props.film;

    return (
        <>
            <Link to={`/people/${id}`}>
                <ul>
                    <li>{name}</li>
                </ul>
            </Link>
        </>
    )
}