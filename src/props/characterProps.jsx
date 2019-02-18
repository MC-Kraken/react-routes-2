import React from 'react'

export default function CharacterProps(props) {

  const { name, gender, age, eye_color, hair_color } = props.character;

  return (
    <>
      <ul>
        <li>Name: { name }</li>
        <li>Gender: { gender }</li>
        <li>Age: { age }</li>
        <li>Eye Color: { eye_color } </li>
        <li>Hair Color: { hair_color }</li>
      </ul>
    </>
  )
}