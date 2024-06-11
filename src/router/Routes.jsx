import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../components/Home/Home";
import Contact from "../components/Others/Contact/Contact";
import ErrorPage from "../components/Shared/Error/ErrorPage";
import EducationAndExperience from "../components/Others/Education&Experience/Education&Experience";
import Explore from "../components/Others/Explore/Explore";
import Events from "../components/Others/Events/Events";
import Gallery from "../components/Others/Gallery/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <Explore></Explore>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/experience",
        element: <EducationAndExperience></EducationAndExperience>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
