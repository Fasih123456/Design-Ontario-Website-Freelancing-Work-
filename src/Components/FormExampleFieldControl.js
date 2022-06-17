import React, { Component } from 'react'
import {
  Button,
  Checkbox,
  Form,
  Input,
  TextArea,
} from 'semantic-ui-react'


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
          />
          <Form.Field
            control={Input}
            label='Middle Name'
            placeholder='Middle Name'
          />
          <Form.Field
            control={Input}
            label='Last name'
            placeholder='Last name'
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