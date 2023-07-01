import React from "react";
import "./HomeMainbar.css";
import QuestionList from "./QuestionList";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../../actions/currentUser";
import { useEffect, useState } from "react";
const HomeMainbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentUserReducer);
  const User = useSelector((state) => state.updatedUserReducer);
  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);
  const navigate = useNavigate();
  const location = useLocation();
  ////////

  // const [lastPostedDate, setLastPostedDate] = useState(
  //   user?.result.lastPostedDate
  // );
  // const [noOfQuestionsPosted, setNoOfQuestionsPosted] = useState(
  //   user?.result.noOfQuestionsPosted
  // );
  // useEffect(() => {
  //   const currentDate = new Date();
  //   const currentDateString = currentDate.toDateString();
  //   if (currentDateString !== lastPostedDate) {
  //     setLastPostedDate(currentDateString);
  //     // setNoOfQuestionsPosted(0);
  //   }
  // }, [lastPostedDate, noOfQuestionsPosted]);

  ////////////
  const checkAuth = () => {
    if (user === null) {
      alert("Login or signup to ask Question ");
      navigate("/Auth/");
    }
    // } else {
    //   if (user.result.subscription === "Free" && noOfQuestionsPosted >= 1) {
    //     alert(
    //       "FREE membership can post only one Question a day ! \n Try upgrading your membership"
    //     );
    //   } else if (
    //     user.result.subscription === "GOLD" &&
    //     noOfQuestionsPosted >= 5
    //   ) {
    //     alert(
    //       "GOLD membership can post only 5 Question a day ! \n Try upgrading your membership"
    //     );}
    else {
      console.log(user);
      navigate("/AskQuestion");
    }
  };
  const handleSubscribe = () => {
    navigate("/Subscribe");
  };
  const questionsList = useSelector((state) => state.questionsReducer);

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        {user !== null ? (
          <button onClick={handleSubscribe} className="ask-btn-1">
            Subscription
          </button>
        ) : (
          <></>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>

      <div>
        {questionsList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.data.length} Questions</p>
            <QuestionList questionsList={questionsList.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
