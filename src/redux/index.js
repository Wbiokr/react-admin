import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import common from './reducers/common'
import menu from './reducers/menu'


export default createStore(combineReducers({
  common,
  menu,
}),applyMiddleware(thunk))