import { useLoaderData } from "react-router-dom";
import SetPageTitle from "../../../components/setPageTitle";
import Cart from "../../../components/Cart";
const Class = () => {
  const loadAllClass = useLoaderData();

  const allApproveClass =  loadAllClass.filter(loadClass=> loadClass.status === 'approved')

  return (
    <div className="my-20">
        <SetPageTitle title='Select Class for Learn ' desc='Expand your horizons with our foreign language learning program. Gain fluency in a new language through interactive lessons and immersive experiences. Unlock new opportunities and connect with cultures around the world.'></SetPageTitle>
        <div className="grid md:grid-cols-2 grid-flow-row-dense lg:grid-cols-3 gap-10 w-full mx-auto">
      {allApproveClass.map((singleClass) => (
        <Cart key={singleClass._id} singleClass={singleClass}></Cart>
      ))}
    </div>
    </div>
  );
};

export default Class;
