import prettyMs from 'pretty-ms'
import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import { actions, selectors } from 'state/interface'
import { mapDispatch } from 'services/redux-helpers'
import { Heading, Text } from 'ui/typo'
import { Card, PlainButton } from 'ui/elements'
import { EditIcon } from 'ui/icons'

const CacheSetting = ({
  identifier,
  toEditCacheSetting,
  cacheSetting
}) => (
  <Fragment>
    <Card
      title={ () => <Heading mostLeft mostRight>Cache Setting</Heading> }
      fab={ () => (
        <PlainButton onClick={ () => toEditCacheSetting(identifier) }>
          <EditIcon />
        </PlainButton>
      ) }
      content={ () => (
        <Fragment>
          <Text mostLeft mostRight>
            { cacheSetting ?
              `TTL: ${ prettyMs(cacheSetting.ttl * 1000) }` : 'N/A'
            }
          </Text>
        </Fragment>
      ) }
    />
  </Fragment>
)

export default connect(
  (state) => {
    const { identifier } = selectors.currentParams(state)

    return {
      identifier,
      cacheSetting: selectors.cacheSetting(state, identifier)
    }
  },
  mapDispatch({
    toEditCacheSetting: (identifier) => actions.requestLocation(`/projects/${ identifier }/cache-setting`),
  })
)(CacheSetting)
