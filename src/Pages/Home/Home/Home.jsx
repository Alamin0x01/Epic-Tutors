import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Review from "../Review/Review";
import bgAnimation0 from "../../../assets/bg-animation.json";
import Lottie from "lottie-react";
import ExtraSection from "./ExtraSection/ExtraSection";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Edu-Cademy</title>
      </Helmet>
      <Banner />
      <div className="w-full mt-96 h-full sm:h-full absolute -z-10">
        <Lottie animationData={bgAnimation0} loop={true} />
      </div>
      <PopularClasses />
      <PopularInstructors />
      <Review></Review>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
