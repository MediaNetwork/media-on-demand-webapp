import Radium from 'radium'
import React from 'react'
import { Portal } from 'react-portal'
import { connect } from 'react-redux'

import Button from 'components/Button'
import modal from 'decorators/Modal'

import { modal as style } from './style'

@modal('project-delete-confirmation')
class DeleteConfirmationModal extends React.Component {
  render() {
    const { onOverlayClick } = this.props

    return [
      <div key="overlay"
        style={style.overlay} onClick={onOverlayClick}>
      </div>,
      <div key="modal"
        style={style.wrapper}>
        <div style={style.content}>
          <p style={style.desc}>You are going to delete this project <b>permanently</b>. Do you wish to continue?</p>

          <div style={style.control}>
            <Button style={style.confirmButton}
              onClick={this._chooseAction('confirm')}>Continue</Button>
            <span style={style.cancelButton}
              onClick={this._chooseAction('cancel')}>I've changed my mind</span>
          </div>
        </div>
      </div>
    ]
  }

  _chooseAction(action) {
    const { onAction } = this.props

    return () => {
      if (!onAction) {
        return
      }

      onAction(action)
    }
  }
}

export default DeleteConfirmationModal