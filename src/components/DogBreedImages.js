import React from 'react'
import { Link } from 'react-router-dom'

export default function DogBreedImages (props) {
    const images = props.images
  return (
    <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>

       {/* This page will show images of a specific dog { props.match.params.breed } breed.  */}
      <br/><br/>
      <Link to="/">Go back to the index</Link>
      <div>
        { images && images.map((url, index) => <img src={ url } alt="Dog" key={index}/>) }
        { !images && 'Loading...' } 
      </div>
    </div>
  )
}