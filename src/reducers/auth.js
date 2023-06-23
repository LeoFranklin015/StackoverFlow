const authReducer = (state = {}, actions) => {
  switch (actions.type) {
    case "AUTH":
      // localStorage.setItem("profile"), JSON.stringify({ ...actions?.data });
      localStorage.setItem("Profile", JSON.stringify({ ...actions?.data }));
      return { ...state, data: actions?.data };
    //   break;

    default:
      return state;
  }
};

export default authReducer;
