import color from 'color'
import { fontStyle } from 'styles/global'

export const textInputStyle = {
  ...fontStyle,
  ':focus': {
    outline: 'none'
  },
  ':hover': {
    outline: 'none'
  },
  padding: '.75rem',
  border: `1px solid ${color('#a0a0a2')}`,
  borderRadius: '.25rem',
  WebkitAppearance: 'none',
  width: '100%',
  maxWidth: '100%'
}