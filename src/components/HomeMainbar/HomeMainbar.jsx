import React from "react";
import "./HomeMainbar.css";
import { Link, useLocation } from "react-router-dom";
const HomeMainbar = () => {
  var questionsList = [
    {
      id: 1,
      votes: 3,
      no0fAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongoDB"],
      userPosted: "mano",
      time: "jan 1",
    },
    {
      id: 2,
      votes: 0,
      noofAnswers: 0,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "mano",
      time: "jan 1",
    },
    {
      id: 3,
      votes: 1,
      no0fAnswers: 0,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "mano",
      time: "jan 1",
    },
  ];

  const location = useLocation();
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1> All Questions</h1>
        )}

        <Link to="/AskQuestion" className="ask-btn">
          Ask Question
        </Link>
      </div>
      <div>
        {questionsList === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.length} Questions</p>
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
