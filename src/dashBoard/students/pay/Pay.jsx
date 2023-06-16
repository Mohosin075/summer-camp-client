
import SetPageTitle from "../../../components/setPageTitle";
import CheckOut from "../checkOut/CheckOut";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useSelect from "../../../hooks/useSelect";

const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_PK);
const Pay = () => {
    const [selectedItems] = useSelect()
    const total  = selectedItems.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2))
    console.log(price);
    return (
        <div className="my-20">
            <SetPageTitle title='Payment'></SetPageTitle>
            <Elements stripe={stripePromise}>
            <CheckOut price={price} selectedItems={selectedItems}></CheckOut>
            </Elements>
        </div>
    );
};

export default Pay;