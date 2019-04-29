import React from 'react'
import Card from './Card'

const IdeaContainer = ({ideas}) => {
  const  displayIdeas= ideas.map(idea => {
    return <Card {...idea} key={idea.id} />
  })

  return (
    <div>
      {displayIdeas}
    </div>
  )
}

export default IdeaContainer