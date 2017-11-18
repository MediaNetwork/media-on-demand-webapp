import { flex } from 'styles/flex'

export default {
  container: Object.assign({}, flex, {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)'
  })
}
