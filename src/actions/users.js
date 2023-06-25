import * as api from "../api/index";

export const fetchAllUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetcAllUsers();
    dispatch({ type: "FETCH_USERS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
