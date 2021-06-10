import { ADD, EDIT, DELETE, DONE } from "../const/actionType";

export const add = (newTask) => {
  return {
    type: ADD,
    payload: newTask, //input
  };
};
export const deleteT = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};
export const edit = (id, newText) => {
  return {
    type: EDIT,
    payload: { id, newText },
  };
};
export const done = (payload) => {
  return {
    type: DONE,
    payload,
  };
};
