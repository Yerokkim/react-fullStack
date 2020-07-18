import { GET_ITEMS, ADD_ITEM, DELETE_ITEMS, SET_LOADING } from "./types";
import axios from "axios";

export const getItems = () => (dispatch) => {
  dispatch(setLoading());
  axios.get("/api/items").then((res) => {
    console.log(res, "from get action");
    dispatch({
      type: "GET_ITEMS",
      payload: res.data,
    });
  });
};

export const setLoading = () => {
  return {
    type: "SET_LOADING",
  };
};
export const addItem = (item) => (dispatch) => {
  axios.post("/api/items", item).then((res) => {
    dispatch({
      type: "ADD_ITEM",
      payload: res.data,
    });
  });
};

export const deleteItem = (id) => (dispatch) => {
  console.log(id, "from action");
  axios.delete(`/api/items/${id}`).then((res) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: id,
    });
  });
};
