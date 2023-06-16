
import SetPageTitle from "../../../components/setPageTitle";
import useSelect from "../../../hooks/useSelect";
import Swal from "sweetalert2";

const EnrollClass = () => {
  const [selectedItems, , refetch] = useSelect();
  const successItem = selectedItems.filter(
    (item) => item.paymentStatus === "success"
  );
  console.log(successItem);
  return (
    <>
    <SetPageTitle title='My Enroll Classes'></SetPageTitle>
    <div className="grid md:grid-cols-2 gap-6 my-10">
      {
        successItem.map(item=><div key={item._id} className="card card-side h-64 bg-base-100 shadow-xl">
        <figure className="w-1/2"><img src={item?.image}   alt="Movie"/></figure>
        <div className="card-body w-1/2">
          <h2 className="card-title">{item.name}</h2>
          <p>Instructor : {item.instructor}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>Swal.fire('this button is not working right now!')} className="btn btn-primary">Continue Learning</button>
          </div>
        </div>
      </div>)
      }
    </div>
    </>
  );
};

export default EnrollClass;
