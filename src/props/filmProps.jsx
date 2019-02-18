import React from 'react'

export default function FilmProps(props) {

  const { title, description, director, producer, release_date } = props.film;

  return (
    <>
      <ul>
        <li>Title: { title }</li>
        <li>Description: { description }</li>
        <li>Director: { director }</li>
        <li>Producer: { producer } </li>
        <li>Release Date: { release_date }</li>
      </ul>
    </>
  )
}