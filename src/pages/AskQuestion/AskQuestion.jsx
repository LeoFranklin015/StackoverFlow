// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { askQuestion } from "../../actions/question";
// import "./AskQuestion.css";
// const AskQuestion = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.currentUserReducer);
//   const navigate = useNavigate();
//   const [Title, setTitle] = useState("");
//   const [Body, setBody] = useState("");
//   const [Tags, setTags] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ Title, Body, Tags });
//     dispatch(
//       askQuestion({ Title, Body, Tags, userPosted: user.result.name }, navigate)
//     );
//   };

//   const handleKey = (e) => {
//     if (e.key === "Enter") {
//       setBody(Body + "\n");
//     }
//   };
//   return (
//     <div className="ask-question">
//       <div className="ask-ques-container">
//         <h1>Ask a Public Question</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="ask-form-container">
//             <label htmlFor="ask-ques-title">
//               <h4>Title</h4>
//               <p>
//                 Be specific and imagine you’re asking a question to another
//                 person.
//               </p>
//               <input
//                 type="text "
//                 name="questionTitle"
//                 id="ask-ques-title"
//                 placeholder="eg : Is there a R function for finding the index of an element in a vector?'/"
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </label>
//             <label htmlFor="ask-ques-body">
//               <h4>Body</h4>
//               <p>
//                 Introduce the problem and expand on what you put in the title.
//                 Minimum 20 characters.
//               </p>
//               <textarea
//                 name="questionBody"
//                 id="ask-ques-body"
//                 cols="30"
//                 rows="10"
//                 onChange={(e) => setBody(e.target.value)}
//                 onKeyPress={handleKey}
//               ></textarea>
//             </label>
//             <label htmlFor="ask-ques-tags">
//               <h4>Tags</h4>
//               <p>
//                 Add up to 5 tags to describe what your question is about. Start
//                 typing to see suggestions.
//               </p>
//               <input
//                 type="text "
//                 name="questionTags"
//                 id="ask-ques-tags"
//                 placeholder="eg : reactJs, NodeJs , Python , Java"
//                 onChange={(e) => setTags(e.target.value.split(" "))}
//               />
//             </label>
//           </div>
//           <input
//             type="submit"
//             value="Review Your Question"
//             className="review-btn"
//           ></input>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AskQuestion;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./AskQuestion.css";
import { askQuestion } from "../../actions/question";

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");

  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (User) {
      if (questionTitle && questionBody && questionTags) {
        dispatch(
          askQuestion(
            {
              questionTitle,
              questionBody,
              questionTags,
              userPosted: User.result.name,
              userId: User?.result._id,
            },
            navigate
          )
        );
      } else alert("Please enter all the fields");
    } else alert("Login to ask question");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setQuestionBody(questionBody + "\n");
    }
  };
  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>Ask a public Question</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>
                Be specific and imagine you’re asking a question to another
                person
              </p>
              <input
                type="text"
                id="ask-ques-title"
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              />
            </label>
            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <textarea
                name=""
                id="ask-ques-body"
                onChange={(e) => {
                  setQuestionBody(e.target.value);
                }}
                cols="30"
                rows="10"
                onKeyPress={handleEnter}
              ></textarea>
            </label>
            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input
                type="text"
                id="ask-ques-tags"
                onChange={(e) => {
                  setQuestionTags(e.target.value.split(" "));
                }}
                placeholder="e.g. (xml typescript wordpress)"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Reivew your question"
            className="review-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
