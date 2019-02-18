import React from 'react'
import { Link } from 'react-router-dom';

export default function FilmsTitles(props) {

    const { id, title } = props.film;

    return (
        <>
            <Link to={`/films/${id}`}>
                <ul>
                    <li>{title}</li>
                </ul>
            </Link>
        </>
    )
}