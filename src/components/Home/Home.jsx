import Blogs from "../Others/Blogs/Blogs";
import Events from "../Others/Events/Events";
import Explore from "../Others/Explore/Explore";
// import Explore from "../Others/Explore/Explore";
import Banner from "./Banner/Banner";
import EducationAndExperience from "../Others/Education&Experience/Education&Experience";
import Contact from "../Others/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Explore></Explore>
      <Events></Events>
      {/* <Explore></Explore> */}
      <EducationAndExperience></EducationAndExperience>
      <Blogs></Blogs>
      <Contact></Contact>
    </div>
  );
};

export default Home;
