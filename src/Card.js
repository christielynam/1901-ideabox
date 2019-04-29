import React from 'react'

const Card = ({title, body, id}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <button>X</button>
    </div>
  )
}

export default Card