import * as MyTypes from 'MyTypes';
import { combineReducers } from 'redux';
import { actionTypes } from '../actions/actions';
import { infinitScroll, loadItems } from './reducer';

export default combineReducers({
  infinitScroll: infinitScroll,
  loadItems: loadItems
});
