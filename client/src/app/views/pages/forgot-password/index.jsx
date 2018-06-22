import React from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { actions, selectors } from 'state/interface'
import { Container } from 'ui/elements'
import { Modal } from 'ui/compounds'
import { mapDispatch, mapState } from 'services/redux-helpers'
import _ForgotPasswordForm from './forgotPasswordForm'

const ForgotPasswordForm = reduxForm({
    form: 'fetchEmail',
    enableReinitialize: true
  })(_ForgotPasswordForm)

const ForgotPassword=({ fetchEmail, emailExist, toSignIn }) => {
  return (
    <main>
      <Container center size="small">
      {!emailExist?<ForgotPasswordForm onSubmit={ fetchEmail }/>:''}
      </Container>
      {emailExist?  <Modal
        open={true}
        zIndex={10}
        onClickOutside={() => {toSignIn}}
        onClose={() => {toSignIn}}
        >
          {() => (
            <div>
              <p>
                Request reset password success! Please check your email and reset password during 24 hour
              </p>
            </div>
          )}
        </Modal>:''}
    </main>
  )}

export default connect(
 mapState({
  emailExist: selectors.emailExist
 }),
 mapDispatch({
  fetchEmail: email => actions.fetchEmail(email),
  toSignIn: () => actions.requestLocation('/sign-in')
 })
)(ForgotPassword)