import * as api from "../api/index";

export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: "AUTH", data });
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};
export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: "AUTH", data });
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};
