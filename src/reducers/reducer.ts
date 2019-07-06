import * as MyTypes from 'MyTypes';
import { combineReducers } from 'redux';
import { createReducer } from "typesafe-actions";
import { actionTypes } from '../actions/actions';

export interface infinitState {
  flag: boolean;
  tracks: object[];
}

export const initialState: infinitState = {
  flag: true,
  tracks: [],
};

export const infinitScroll = createReducer<object[], MyTypes.RootAction>(initialState.tracks)
  .handleAction(actionTypes.ADD, (state, action) => [...state, action.payload]);

export const loadItems = createReducer<boolean, MyTypes.RootAction>(initialState.flag)
  .handleAction(actionTypes.LOAD, (state, action) => action.payload);
