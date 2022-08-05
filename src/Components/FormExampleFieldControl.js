import React, { Component } from 'react'
import {
  Button,
  Checkbox,
  Form,
  Input,
  TextArea,
} from 'semantic-ui-react'
import Footer from './Footer'


class FormExampleFieldControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (

      <Form>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='First name'
            placeholder='First name'
            required
          />

          <Form.Field
            control={Input}
            label='Last name'
            placeholder='Last name'
          />

        </Form.Group>

        <Form.Group widths="equal">

        <Form.Field 
          control={Input}
          label='Email'
          placeholder='sabih@hotmail.com'
          required
        />

        <Form.Field 
          control={Input}
          label='Phone Number'
          placeholder='+15147937039'
        /> 
        </Form.Group>

        
        <Form.Field
          control={TextArea}
          label='About'
          placeholder='Tell us more about you...'
        />

        <Form.Field control={Button}>Submit</Form.Field>
      </Form>

    )
  }
}

export default FormExampleFieldControl