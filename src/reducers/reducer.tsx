import { combineReducers } from 'redux';
import { createReducer } from "typesafe-actions";
import { actionTypes } from '../actions/actions';

interface infinitState {
  tracks: string[];
}

export const initialState: infinitState = {
  tracks: [],
};

const infinitScroll = createReducer(initialState.tracks)
  .handleAction(actionTypes.ADD, (state, action) => [...state, action.payload]);

export default combineReducers({
  infinitScroll,
});
