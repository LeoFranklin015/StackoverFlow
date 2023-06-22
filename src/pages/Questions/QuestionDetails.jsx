import React from "react";
import { Link, useParams } from "react-router-dom";
import up from "../../assets/up.svg";
import down from "../../assets/down.svg";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";
import "./Question.css";
const QuestionDetails = () => {
  const { id } = useParams();
  var questionsList = [
    {
      _id: "1",
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongo db "],
      userPosted: "mano",
      userId: 1,
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "jan 2",
          userld: 2,
        },
      ],
    },
    {
      _id: 2,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongo db "],
      userPosted: "mano",
      userId: 1,
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "jan 2",
          userld: 2,
        },
      ],
    },
    {
      _id: 3,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongo db "],
      userPosted: "mano",
      userId: 1,
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "jan 2",
          userld: 2,
        },
      ],
    },
  ];
  return (
    <div className="question-detail-page">
      {questionsList === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionsList
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <img src={up} alt="up-arrow" width="20" />
                    <p>{question.upVotes - question.downVotes}</p>
                    <img src={down} alt="down-arrow" width="20" />

                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-detail-tags">
                        {question.questionTags.map((tag) => (
                          <p>{tag} </p>
                        ))}
                      </div>
                      <div className="question-action-user">
                        <button type="button">Share</button>
                        <button type="button">Delete</button>
                      </div>
                      <div>
                        <p>asked {question.askedOn}</p>
                        <Link
                          to={`/User/${question.userId}`}
                          className="user-link"
                        >
                          <Avatar backgroundColor="orange" px="5px" py="5px">
                            {question.userPosted.charAt(0).toUpperCase()}
                          </Avatar>
                          <div>{question.userPosted}</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} Answers</h3>
                    <DisplayAnswer key={question._id} question={question} />
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionDetails;
