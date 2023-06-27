import * as api from "../api/index";

export const fetchAllUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetcAllUsers();
    dispatch({ type: "FETCH_USERS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updateProfile = (id, updateData) => async (dispatch) => {
  try {
    const { data } = await api.updateProfile(id, updateData);
    dispatch({ type: "UPDATE_CURRENT_USER", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateSubscription = (id, data) => async (dispatch) => {
  try {
    const { SubscribeData } = await api.updateSubscription(id, data);
    dispatch({ type: "UPDATE_SUBSCRIPTION", payload: SubscribeData });
  } catch (error) {
    console.log(error);
  }
};
