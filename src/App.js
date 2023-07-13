import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import { useEffect, useState } from "react";
import { fetchAllQuestions } from "./actions/question";
import { useDispatch } from "react-redux";
import { fetchAllUsers } from "./actions/users";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setSlideIn(false);
    }
  }, []);

  const handleSlideIn = () => {
    if (window.innerWidth <= 768) {
      setSlideIn((state) => !state);
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar handleSlideIn={handleSlideIn} />
        <AllRoutes slideIn={slideIn} handleSlideIn={handleSlideIn} />
      </Router>
    </div>
  );
}

export default App;
