import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import SetPageTitle from "../../../components/setPageTitle";

const PaymentHistory = () => {
    const {user} = useContext(AuthContext)
    const [paymentData, setPaymentData] = useState([])
    console.log(user.email);
    useEffect(()=>{
        fetch(`https://summer-school-camp-server-nine.vercel.app/paymentHistory/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setPaymentData(data);
            console.log(data);
        })
    },[])
    return (
        <div>
            <div className="container mx-auto p-4">
      <SetPageTitle title='Payment History'></SetPageTitle>
      <table className="table-auto w-full overflow-x-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Transaction ID</th>
            <th className="px-4 py-2">Class Name</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {paymentData.map((payment, idx) => (
            <tr key={payment.id}>
              <td className="border px-4 py-2">{idx + 1}</td>
              <td className="border px-4 py-2">{payment.transactionId}</td>
              <td className="border px-4 py-2">{payment.itemName}</td>
              <td className="border px-4 py-2">{payment.date}</td>
              <td className="border px-4 py-2">${payment.price}</td>
              <td className="border px-4 py-2 text-green-600">success</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
    );
};

export default PaymentHistory;