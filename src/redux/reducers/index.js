import {
  combineReducers
} from 'redux';

import information from './information'
import common from './common.js'

export default combineReducers({
  common,
  information,
})