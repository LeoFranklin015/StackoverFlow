import {
  useElements,
  useStripe,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePayment, updateSubscription } from "../../actions/users";
import "./Payment.css";
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
        card: elements.getElement(CardNumberElement),
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
    <div className="payment-form-container" style={{ padding: "10px" }}>
      <div className="card-container">
        <div className="input-field">
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "70%", height: "25px", fontSize: "14px" }}
          />
        </div>
        <div className="input-field">
          Email:{" "}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "70%", height: "25px", fontSize: "14px" }}
          />
        </div>
        <div className="form-row">
          <label htmlFor="card-number">Card Number</label>
          <div id="card-number" className="card-element">
            <CardNumberElement
              options={
                {
                  /* Element options */
                }
              }
            />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="card-expiry">Expiration Date</label>
          <div id="card-expiry" className="card-element">
            <CardExpiryElement
              options={
                {
                  /* Element options */
                }
              }
            />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="card-cvc">CVC</label>
          <div id="card-cvc" className="card-element">
            <CardCvcElement
              options={
                {
                  /* Element options */
                }
              }
            />
          </div>
        </div>

        <div>
          <button onClick={createSubscription} className="subscribe">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
