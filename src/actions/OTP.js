import * as api from "../api/index";
export const GenerateOTP = (userId, email) => async (dispatch) => {
  console.log(userId);
  console.log(email);
  const { data } = await api.generateOTP({ userId, email });
  console.log(data);
};
