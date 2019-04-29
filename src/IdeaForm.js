import React, { Component } from 'react'

class IdeaForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({[name]: value}) 
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addIdea(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          onChange={this.handleChange}
          value={this.state.title}
          placeholder='Title'
          name='title'
          />
        <input 
          type="text"
          onChange={this.handleChange}
          value={this.state.body}
          placeholder='Body'
          name='body'
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default IdeaForm