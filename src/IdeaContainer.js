import React from 'react'
import Card from './Card'

const IdeaContainer = ({ideas, removeIdea}) => {
  const  displayIdeas= ideas.map(idea => (
    <Card {...idea} key={idea.id} removeIdea={removeIdea} />
  ))

  return (
    <div>
      {displayIdeas}
    </div>
  )
}

export default IdeaContainer