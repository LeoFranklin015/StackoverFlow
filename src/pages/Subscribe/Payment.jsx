// import {
//   CardElement,
//   PaymentElement,
//   PaymentRequestButtonElement,
//   useElements,
//   useStripe,
// } from "@stripe/react-stripe-js";
// import React, { useState } from "react";
// import { updatePayment } from "../../actions/users";

// function PaymentForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const stripe = useStripe();
//   const elements = useElements();

//   const createSubscription = async () => {
//     try {
//       const paymentMethod = await stripe.createPaymentMethod({
//         card: elements.getElement("card"),
//         type: "card",
//       });
//       const response = await fetch("http://localhost:4000/user/payment", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           paymentMethod: paymentMethod.paymentMethod.id,
//         }),
//       });
//       if (!response.ok) return alert("Payment unsuccessful!");
//       const data = await response.json();
//       const confirm = await stripe.confirmCardPayment(data.clientSecret);
//       if (confirm.error) return alert("Payment unsuccessful!");
//       alert("Payment Successful! Subscription active.");
//     } catch (err) {
//       console.error(err);
//       alert("Payment failed! " + err.message);
//     }
//   };

//   return (
//     <div style={{ width: "40%", marginTop: "100px" }}>
//       Name:{" "}
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <br />
//       Email:{" "}
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <br />
//       <CardElement />
//       <br />
//       <button onClick={createSubscription}>Subscribe - 5 INR</button>
//     </div>
//   );
// }

// export default PaymentForm;

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePayment } from "../../actions/users";

function PaymentForm({ product }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const createSubscription = async () => {
    try {
      const paymentMethod = await stripe.createPaymentMethod({
        card: elements.getElement("card"),
        type: "card",
      });

      const response = await dispatch(
        updatePayment(name, email, paymentMethod.paymentMethod.id)
      );

      if (!response) {
        return alert("Payment unsuccessful!");
      }

      const confirm = await stripe.confirmCardPayment(response.clientSecret);
      if (confirm.error) {
        return alert("Payment unsuccessful!");
      }

      alert("Payment Successful! Subscription active.");
    } catch (err) {
      console.error(err);
      alert("Payment failed! " + err.message);
    }
  };

  return (
    <div style={{ width: "40%", marginTop: "100px" }}>
      Name:{" "}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      Email:{" "}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <CardElement />
      <br />
      <button onClick={createSubscription}>Subscribe - 5 INR</button>
    </div>
  );
}

export default PaymentForm;
