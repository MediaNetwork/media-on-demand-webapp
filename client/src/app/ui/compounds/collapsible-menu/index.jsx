import React, { Component } from 'react'
import { Portal } from 'react-portal'
import styled from 'styled-components'

import { BreakPoint } from 'ui/elements'
import { MoreIcon } from 'ui/icons'

const Wrapper = styled.nav`
  position: relative;
  white-space: nowrap;

  & > * {
    margin-left: 10px;
  }
`

const DropDownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 36px;
  right: 0;
  padding: 0 20px 20px;
  z-index: 9;
  background: rgba(0, 0, 0, .6);

  & > * {
    margin-top: 20px;
  }
`
// TODO fix stateful
class CollapsibleMenu extends Component {
  constructor(...args) {
    super(...args)

    this.state = {
      showDropDownMenu: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState({
      showDropDownMenu: !this.state.showDropDownMenu
    })
  }

  render() {
    const { children } = this.props
    const { showDropDownMenu } = this.state

    return (
      <Wrapper>
        <BreakPoint name="medium">
          { children }
        </BreakPoint>
        <BreakPoint name="small">
          <MoreIcon size="medium" inverted
            onClick={ this.toggleMenu }
          />
          {
            showDropDownMenu && (
              <Portal node={ document && document.getElementById('wrapper') }>
                <DropDownMenu>
                  { children }
                </DropDownMenu>
              </Portal>
            )
          }
        </BreakPoint>
      </Wrapper>
    )
  }
}

export default CollapsibleMenu