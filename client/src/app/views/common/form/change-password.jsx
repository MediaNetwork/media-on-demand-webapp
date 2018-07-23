import React from 'react'

import { Form } from 'ui/compounds'
import { Button } from 'ui/elements'
import { TextBox } from 'views/common/form'
import { validateRequired } from 'views/common/validate'

const passwordForm = ({ handleSubmit, header, resetPassword, valid }) => (
  <Form handleSubmit={ handleSubmit }>
    <Form.Header>{ header }</Form.Header>
    <Form.Description>Enter your new password below and click on the {'Change password'} button.</Form.Description>
    { !resetPassword? <Form.Line>
      <TextBox
        type="password"
        name="currentPassword"
        placeholder="Current password"
      />
    </Form.Line> :''
    }
    <Form.Line>
      <TextBox
        type="password"
        name="password"
        placeholder="New password"
        validate={ validateRequired }
      />
    </Form.Line>
    <Form.Line>
      <TextBox
        type="password"
        name="rePassword"
        placeholder="Retype password"
        validate={ validateRequired }
      />
    </Form.Line>
    <Form.Line last>
      <Form.Align center>
        <Button
          type="submit"
          onClick={ (e) => {
            if (!valid) {
              e.preventDefault()
            }
          } }>
          Change password
        </Button>
      </Form.Align>
    </Form.Line>
  </Form>
)

export default passwordForm
