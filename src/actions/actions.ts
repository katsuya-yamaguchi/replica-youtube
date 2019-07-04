import { action } from "typesafe-actions";

export enum actionTypes {
  ADD = "ADD",
  LOAD = "LOAD",
}

export const addItems = (item: object) => action(actionTypes.ADD, item);
export const hasMore = (flag: boolean) => action(actionTypes.LOAD, flag);
