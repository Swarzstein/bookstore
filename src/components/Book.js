/* eslint-disable react/prop-types */
import React from 'react';

export default function Book(props) {
  const { title, author } = props;
  return (
    <div>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button type="button">Remove</button>
    </div>
  );
}
