import React from "react";
import { useRef, useEffect, useState } from "react";
import "./Bot.css";
const Bot = () => {
  const [message, setMessage] = useState("");
  const [responses, setResponses] = useState([]);
  const responseContainerRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/chatbot/question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => {
        const newResponse = {
          question: message,
          answer: data.message.content,
        };
        setResponses([...responses, newResponse]);
      })
      .catch((error) => console.log(error));
    setMessage("");
  };

  // Scroll to the bottom of the response container when new responses are added
  useEffect(() => {
    if (responseContainerRef.current) {
      responseContainerRef.current.scrollTop =
        responseContainerRef.current.scrollHeight;
    }
  }, [responses]);

  return (
    <div className="App">
      <div className="response-container" ref={responseContainerRef}>
        {responses.map((response, index) => (
          <div key={index} className="response">
            <div className="question">{response.question}</div>
            <pre className="answer">{response.answer}</pre>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="textarea"
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Bot;