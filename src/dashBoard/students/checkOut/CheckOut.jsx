/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const CheckOut = ({ price, selectedItems }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [cardError, setCardError] = useState("");

  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    axios.post("http://localhost:5000/create-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    console.log("card", card);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error method", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment method", paymentMethod);
      setTransactionId(paymentMethod.id);

      const payment = {
        email: user?.email,
        transactionId: paymentMethod.id,
        price,
        itemId: selectedItems.map((item) => item._id),
        itemName: selectedItems.map((item) => item.name),
      };

      fetch('http://localhost:5000/payment', {
        method : 'POST', 
        headers : {
          'content-type' :'application/json'
        },
        body : JSON.stringify(payment)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Payment Successfull!',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn text-white btn-neutral m-8"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8 mb-5">{cardError}</p>}
      {transactionId && (
        <p className="text-green-600 ml-8 mb-5">
          transaction compleate. transaction id : {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckOut;
