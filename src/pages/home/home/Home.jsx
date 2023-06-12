import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import PopularClass from "../popularClass/PopularClass";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>SpeckEasy | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularClass></PopularClass>
    </div>
  );
};

export default Home;
