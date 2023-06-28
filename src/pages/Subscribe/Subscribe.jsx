import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../actions/currentUser";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./Payment";
const Subscribe = () => {
  // const user = useSelector((state) => state.currentUserReducer);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  // }, [dispatch]);
  // const sub = user.result.subscription;

  const stripePromise = loadStripe(
    "pk_test_51NNVFQSFLmZqb4QYkR7ceOim49rqacqZxgLT6BzdNIX6LfJsD4cnyGmDRKNvKp6CEs7pj8hMnAJ2SG20QJJE3Ov400V7YfO5sU"
  );

  return (
    <div>
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default Subscribe;
