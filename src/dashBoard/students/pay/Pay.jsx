
import SetPageTitle from "../../../components/setPageTitle";
import CheckOut from "../checkOut/CheckOut";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useSelect from "../../../hooks/useSelect";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_PK);
const Pay = () => {
    const [selectedItems] = useSelect()
    const {id} = useParams()
    const total  = selectedItems.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2))
    console.log(price);
    return (
        <div className="my-20">
            <Helmet>
        <title>SpeckEasy | payment</title>
      </Helmet>
            <SetPageTitle title='Payment'></SetPageTitle>
            <Elements stripe={stripePromise}>
            <CheckOut price={price} selectedItems={selectedItems} id={id}></CheckOut>
            </Elements>
        </div>
    );
};

export default Pay;