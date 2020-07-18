import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEMS,
  SET_LOADING,
} from "../actions/types";

const initialState = {
  items: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case DELETE_ITEMS:
      return {
        ...state,
        items: state.items.filter((x) => x._id !== action.payload),
      };
    case ADD_ITEM: {
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
}