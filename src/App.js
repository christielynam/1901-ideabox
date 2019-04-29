import React, { Component } from 'react';
import './App.css';
import IdeaForm from './IdeaForm'
import IdeaContainer from './IdeaContainer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ideas: []
    }
  }

  addIdea = (idea) => {
    const newIdea = {...idea, id: Date.now()}
    const ideas = [...this.state.ideas, newIdea]
    this.setState({ ideas })
  }

  removeIdea = (id) => {
    const ideas = this.state.ideas.filter(idea => idea.id !== id)
    this.setState({ ideas })
  }

  render() {
    const { ideas } = this.state
    return (
      <div className="App">
        <h1>IdeaBox</h1>
        <IdeaForm addIdea={this.addIdea}/>
        <IdeaContainer ideas={ideas} removeIdea={this.removeIdea} />
      </div>
    );
  }
}

export default App;
