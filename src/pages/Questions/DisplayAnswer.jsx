import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
const DisplayAnswer = ({ question }) => {
  return (
    <div>
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className="question-actions-user">
            <div>
              <button type="button">Share</button>
              <button type="button">Delete</button>
            </div>
            <div>
              <p>answered {moment(ans.answeredOn).fromNow()}</p>
              <Link to={`/User/${ans.userId}`} className="user-link">
                <Avatar backgroundColor="orange" px="5px" py="5px">
                  {ans.userAnswered.charAt(0).toUpperCase()}
                </Avatar>
                <div>{ans.userAnswered}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;
