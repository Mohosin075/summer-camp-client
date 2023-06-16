import { useEffect, useState } from "react";
import SetPageTitle from "../../../../components/setPageTitle";
import { Fade } from "react-awesome-reveal";

const LearningTips = () => {
    const [tips, setTips] = useState([])
useEffect(()=>{
    fetch('https://summer-school-camp-server-nine.vercel.app/tips')
    .then(res=>res.json())
    .then(data=>{
        setTips(data);
    })
},[])
  return (
    <div>
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SetPageTitle title="Language Learning Tips"></SetPageTitle>
          <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Fade delay={1e2} duration={2000} damping={1e-3}>
            {
                tips.map((tip, idx)=><div key={tip._id} className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-2">
                  Tip {idx + 1}: {tip.title}
                </h2>
                <p className="text-gray-600">
                  {tip.details}
                </p>
              </div>)
            }
          </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningTips;
