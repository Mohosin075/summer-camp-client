import { Link, useLoaderData } from "react-router-dom";
import SetPageTitle from "../../../components/setPageTitle";
import Cart from "../../../components/Cart";

const PopularClass = () => {
    const loadPopularData = useLoaderData();
    return (
        <div className="my-20">
            <SetPageTitle title='Popular Class' desc='Explore our popular language courses, designed to immerse you in the beauty of language and culture'></SetPageTitle>
            <div className="grid md:grid-cols-2 grid-flow-row-dense lg:grid-cols-3 gap-10 w-full mx-auto">
      {loadPopularData.map((singleClass) => (
        <Cart key={singleClass._id} singleClass={singleClass}></Cart>
      ))}
    </div>
      <div className="text-center w-full mt-12"><Link to='/classes'>
      <button className="btn btn-outline md:w-1/3">See All Class</button></Link>
      </div>
        </div>
    );
};

export default PopularClass;