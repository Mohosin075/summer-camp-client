import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import PopularClass from "../popularClass/PopularClass";
import PopularInstuctor from "../popularInstructor/PopularInstuctor";
import LearningTips from "../banner/learningTips/LearningTips";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>SpeckEasy | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularClass></PopularClass>
      <PopularInstuctor></PopularInstuctor>
      <LearningTips></LearningTips>
    </div>
  );
};

export default Home;
