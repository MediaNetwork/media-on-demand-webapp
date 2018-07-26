import React from 'react'

import { Container, MasonryLayout } from 'ui/elements'
import Project from './project'

const Dashboard = () => (
  <Container>
    <MasonryLayout
      items={ [ {
        component: Project,
        grid: {
          w: 1,
          h: 2
        }
      }, {
        component: Project,
        grid: {
          w: 1,
          h: 4
        },
      }, {
        component: Project,
        grid: {
          w: 1,
          h: 2
        },
      }, {
        component: Project,
        grid: {
          w: 2,
          h: 2
        }
      }, {
        component: Project,
        grid: {
          w: 1,
          h: 2
        },
      } ] }
    />
  </Container>
)

export default Dashboard
