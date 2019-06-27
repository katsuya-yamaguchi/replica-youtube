import { StateType, ActionType } from 'typesafe-actions';

declare module 'MyTypes' {
  export type RootAction = ActionType<typeof import('../actions/actions')>
  export type ReducerState = StateType<typeof import('../reducers/reducer').default>
}
