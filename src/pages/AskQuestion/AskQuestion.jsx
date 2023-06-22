import React from "react";
import './AskQuestion.css'
const AskQuestion = () => {
  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>Ask a Public Question</h1>
        <form>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>
                Be specific and imagine you’re asking a question to another
                person.
              </p>
              <input
                type="text "
                name="questionTitle"
                id="ask-ques-title"
                placeholder="eg : Is there a R function for finding the index of an element in a vector?'/"
              />
            </label>
            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>
                Introduce the problem and expand on what you put in the title.
                Minimum 20 characters.
              </p>
              <textarea name="questionBody" id="ask-ques-body" cols="30" rows="10"></textarea>

            </label>
            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>
                Add up to 5 tags to describe what your question is about. Start
                typing to see suggestions.
              </p>
              <input
                type="text "
                name="questionTags"
                id="ask-ques-tags"
                placeholder="eg : reactJs, NodeJs , Python , Java"
              />
            </label>
          </div>
          <input type="submit" value="Review Your Question" className="review-btn"></input>
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
