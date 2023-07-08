// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setCurrentUser } from "../../actions/currentUser";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import PaymentForm from "./Payment";
// const Subscribe = () => {
//   // const user = useSelector((state) => state.currentUserReducer);
//   // const dispatch = useDispatch();
//   // useEffect(() => {
//   //   dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
//   // }, [dispatch]);
//   // const sub = user.result.subscription;

//   const stripePromise = loadStripe(
//     "pk_test_51NNVFQSFLmZqb4QYkR7ceOim49rqacqZxgLT6BzdNIX6LfJsD4cnyGmDRKNvKp6CEs7pj8hMnAJ2SG20QJJE3Ov400V7YfO5sU"
//   );

//   const [showPaymentFormGold, setShowPaymentFormGold] = useState(false);
//   const handleGold = () => {
//     setShowPaymentFormGold(!showPaymentFormGold);
//     setShowPaymentFormPlatinum(false);
//   };
//   const [showPaymentFormPlatinum, setShowPaymentFormPlatinum] = useState(false);
//   const handlePlatinum = () => {
//     setShowPaymentFormPlatinum(!showPaymentFormPlatinum);
//     setShowPaymentFormGold(false);
//   };
//   return (
//     <div>
//       <h3 style={{ marginTop: "50px" }}>Choose Your Plan </h3>
//       <div style={{ padding: "10px", margin: "10px" }}>
//         <button
//           onClick={handleGold}
//           style={{ marginTop: "100px" }}
//           className={showPaymentFormGold ? "active1" : "btn"}
//         >
//           GOLD
//         </button>
//         <button
//           onClick={handlePlatinum}
//           style={{ marginTop: "100px" }}
//           className={showPaymentFormPlatinum ? "active1" : "btn"}
//         >
//           Platinum
//         </button>
//         {showPaymentFormGold && (
//           <Elements stripe={stripePromise}>
//             <PaymentForm productId={"prod_O9pjsBVkDvAtrb"} />
//           </Elements>
//         )}
//         {showPaymentFormPlatinum && (
//           <Elements stripe={stripePromise}>
//             <PaymentForm productId={"prod_O9q8GjzCtGxnD4"} />
//           </Elements>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Subscribe;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../actions/currentUser";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./Payment";
import "./Subscribe.css"; // Import the CSS file

const Subscribe = () => {
  const stripePromise = loadStripe(
    "pk_test_51NNVFQSFLmZqb4QYkR7ceOim49rqacqZxgLT6BzdNIX6LfJsD4cnyGmDRKNvKp6CEs7pj8hMnAJ2SG20QJJE3Ov400V7YfO5sU"
  );

  const [showPaymentFormGold, setShowPaymentFormGold] = useState(false);
  const handleGold = () => {
    setShowPaymentFormGold(!showPaymentFormGold);
    setShowPaymentFormPlatinum(false);
  };
  const [showPaymentFormPlatinum, setShowPaymentFormPlatinum] = useState(false);
  const handlePlatinum = () => {
    setShowPaymentFormPlatinum(!showPaymentFormPlatinum);
    setShowPaymentFormGold(false);
  };

  return (
    <div className="subscription-container">
      {" "}
      {/* Apply the container class */}
      <div className="subscription-form">
        {" "}
        {/* Apply the form class */}
        <div className="subscription-header">
          <h3>Choose Your Plan</h3>
        </div>
        <button
          onClick={handleGold}
          className={
            showPaymentFormGold
              ? "subscription-button active1"
              : "subscription-button btn"
          }
        >
          GOLD
        </button>
        <button
          onClick={handlePlatinum}
          className={
            showPaymentFormPlatinum
              ? "subscription-button active1"
              : "subscription-button btn"
          }
        >
          Platinum
        </button>
        {showPaymentFormGold && (
          <Elements stripe={stripePromise}>
            <PaymentForm productId={"prod_O9pjsBVkDvAtrb"} />
          </Elements>
        )}
        {showPaymentFormPlatinum && (
          <Elements stripe={stripePromise}>
            <PaymentForm productId={"prod_O9q8GjzCtGxnD4"} />
          </Elements>
        )}
      </div>
    </div>
  );
};

export default Subscribe;
