import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'

import Layout, { LeftMenu, TopMenu } from 'views/layout'
import { HistoryProvider, Router } from 'views/router'
import { content, overlay, still, unauthRoutes } from 'views/route-config'
import defaultTheme from 'views/themes/default'
import { Nothing } from 'ui/elements'

const HEADER_HEIGHT = 0
const MENU_WIDTH = 44

const overlayRoutesPattern = Object.keys(unauthRoutes)
  .map(p => p.split(':')[0] + '*')
  .join('|')

const Header = () => (
  <TopMenu menuWidth={ MENU_WIDTH } />
)

const Overlay = ({ history }) => (
  <Fragment>
    <Router
      animated="slide"
      history={ history }
      routes={ overlay }
    />
    <Router
      animated="fade"
      history={ history }
      routes={ [
        {
          path: `(${ overlayRoutesPattern })`,
          component: Nothing
        }
      ] }
      otherwise={ () => <LeftMenu width={ MENU_WIDTH } /> }
    />
  </Fragment>
)

const Content = ({ history }) => (
  <Router
    history={ history }
    routes={ content }
  />
)

const Still = ({ history }) => (
  <Router
    history={ history }
    routes={ still }
  />
)

const render = {
  header: Header,
  overlay: Overlay,
  content: Content,
  still: Still
}

const App = () => (
  <ThemeProvider theme={ defaultTheme }>
    <HistoryProvider>
      <Layout render={ render }
        menuWidth={ MENU_WIDTH }
        headerHeight={ HEADER_HEIGHT }
      />
    </HistoryProvider>
  </ThemeProvider>
)

export default App
