import { Component } from 'react';
import { Form } from 'semantic-ui-react';

class CatForm extends Component {
  state = { nombre: '', age: 0, breed: '', color: '', avatar: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { age } = this.state 
    this.setState({ age: parseInt(age) })
    this.props.addCat(this.state)
    this.setState({ nombre: '', age: 0, breed: '', color: '', avatar: '' })
  }

  render() {
    const { nombre, age, breed, color, avatar } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='nombre'
          value={nombre}
          onChange={this.handleChange}
          required
          label='Name'
        />
        <Form.Input
          name='age'
          type='number'
          value={age}
          onChange={this.handleChange}
          required
          label='Age'
        />
        <Form.Input
          name='breed'
          value={breed}
          onChange={this.handleChange}
          required
          label='Breed'
        />
        <Form.Input
          name='color'
          value={color}
          onChange={this.handleChange}
          required
          label='Color'
        />
        <Form.Input
          name='avatar'
          value={avatar}
          onChange={this.handleChange}
          required
          label='Avatar'
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default CatForm;