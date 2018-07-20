import React from 'react'

import { Form } from 'ui/compounds'
import { Button } from 'ui/elements'
import { TextBox  } from 'views/common/form'

const SignInForm = ({ handleSubmit, idle }) => (
  <Form handleSubmit={ handleSubmit }>
    <Form.Line>
      <TextBox
        type="email"
        name="email"
        placeholder="your email"
        disabled={ !idle }
        needValidation= { true }
      />
    </Form.Line>
    <Form.Line>
      <TextBox
        type="password"
        name="password"
        placeholder="your password"
        disabled={ !idle }
      />
    </Form.Line>
    <Form.Line last>
      <Button type="submit" disabled={ !idle }>Sign In</Button>
    </Form.Line>
  </Form>
)

export default SignInForm
