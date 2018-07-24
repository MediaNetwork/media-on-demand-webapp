import React from 'react'

import { List } from 'ui/compounds'

const PresetList = ({ presets, onPresetSelected }) => (
  <List>
    {
      Object.values(presets).map(
        (preset, index) => (
          <List.Item
            onClick={ () => onPresetSelected(preset.hash) }
            key={ index }
          >
            { preset.name }
          </List.Item>
        )
      )
    }
  </List>
)

export default PresetList
