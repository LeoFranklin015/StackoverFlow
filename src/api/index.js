import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });
// const API = axios.create({
//   baseURL: "https://stackoverflow-fo3t.onrender.com",
// });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});
export const logIn = (authData) => API.post("/user/login", authData);
export const signUp = (authData) => API.post("/user/signup ", authData);

export const postQuestion = (questionData) =>
  API.post("/questions/Ask", questionData);
export const getAllQuestions = () => API.get("/questions/get");
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
export const voteQuestion = (id, value, userId) =>
  API.patch(`/questions/vote/${id}`, { value, userId });

export const deleteAnswer = (id, answerId, noOfAnswers) =>
  API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers });
export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) =>
  API.patch(`/answer/post/${id}`, {
    noOfAnswers,
    answerBody,
    userAnswered,
    userId,
  });

export const fetcAllUsers = () => API.get("/user/getAllUser");

export const updateProfile = (id, updateData) =>
  API.patch(`/user/update/${id}`, updateData);

export const updateSubscription = (id, data) =>
  API.patch(`user/subscribe/${id}`, data);

export const updatePayment = ({ name, email, paymentMethod }) =>
  API.post("/user/payment", { name, email, paymentMethod });

export const subscribe = async (name, email, paymentMethod, productId) => {
  try {
    const response = await API.post("/user/payment", {
      name,
      email,
      paymentMethod,
      productId,
    });

    if (response.status !== 200) {
      throw new Error("Payment unsuccessful!");
    }

    return response.data;
  } catch (err) {
    throw err;
  }
};
