import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePayment, updateSubscription } from "../../actions/users";

function PaymentForm({ productId }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentUserReducer);
  const id = user.result._id;
  // console.log(user.result._id);

  const createSubscription = async () => {
    try {
      const paymentMethod = await stripe.createPaymentMethod({
        card: elements.getElement("card"),
        type: "card",
      });

      const response = await dispatch(
        updatePayment(name, email, paymentMethod.paymentMethod.id, productId)
      );

      if (!response) {
        return alert("Payment unsuccessful!");
      }

      const confirm = await stripe.confirmCardPayment(response.clientSecret);
      if (confirm.error) {
        return alert("Payment unsuccessful!");
      }
      if (productId === "prod_O9pjsBVkDvAtrb") {
        alert("GOLD MEMBERSHIP");
        dispatch(updateSubscription(user.result._id, "GOLD"));
      } else {
        dispatch(updateSubscription(user.result._id, "PLATINUM"));
        alert("PLATINUM MEMBERSHIP");
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
      <button onClick={createSubscription}>Subscribe </button>
    </div>
  );
}

export default PaymentForm;
