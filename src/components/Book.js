import React, { useState } from 'react'

export default function Book(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <button type="button">Remove</button>
    </div>
  )
}
