import { action } from "typesafe-actions";

export enum actionTypes {
  ADD = "ADD",
}

export const addItems = (item: object) => action(actionTypes.ADD, item);
