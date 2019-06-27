import { action } from "typesafe-actions";

export enum actionTypes {
  ADD = "ADD",
}

export const addItems = (item: string) => action(actionTypes.ADD, item);
