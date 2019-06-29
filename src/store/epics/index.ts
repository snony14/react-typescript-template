import { combineEpics } from 'redux-observable'
import manageBootstrap from './bootStrapEpics'

export default combineEpics(
  manageBootstrap,
)