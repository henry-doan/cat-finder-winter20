import { Component } from 'react';
import { Form } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';

class CatForm extends Component {
  state = { nombre: '', age: 0, breed: '', color: '', file: '' }

  onDrop = (files) => {
    this.setState({ ...this.state, file: files[0] })
  }

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
        {/* <Form.Input
          name='avatar'
          value={avatar}
          onChange={this.handleChange}
          required
          label='Avatar'
        /> */}
        <Dropzone
          onDrop={this.onDrop}
          multiple={false}
        >
          {({ getRootProps, getInputProps, isDragActive}) => {
            return(
              <div
                {...getRootProps()}
                styles={styles.dropzone}
              >
                <input { ...getInputProps()} />
                {
                  isDragActive ?
                    <p>Already loaded file but you can change the file</p>:
                    <p>Drop files here</p>
                }
              </div>
            )
          }}
        </Dropzone>
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}

export default CatForm;