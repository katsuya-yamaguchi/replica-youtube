import * as MyTypes from 'MyTypes';
import { combineReducers } from 'redux';
import { createReducer } from "typesafe-actions";
import { actionTypes } from '../actions/actions';

export interface infinitState {
  tracks: string[];
}

export const initialState: infinitState = {
  tracks: [],
};

const infinitScroll = createReducer(initialState.tracks)
  .handleAction(actionTypes.ADD, (state, action: MyTypes.RootAction) => [...state, action.payload]);

export default combineReducers({
  infinitScroll,
});
