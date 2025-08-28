import React from "react";
import { showToast } from "../Components/ui/Alert";
import HeroSectionComp from "../Components/HomePageLayoutComp/HeroSectionComp";
import AboutSectionComp from "../Components/HomePageLayoutComp/AboutSectionComp";
import PopularCategories from "../Components/HomePageLayoutComp/PopularCategoriesComp";

const HomePage = () => {
  return (
    <>
      <div className="bg-base text-white">
        <HeroSectionComp />
        <div className="my-10 md:my-20 w-40 md:w-[300px] h-0.5 mx-auto rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent "></div>

        <PopularCategories />

        <div className="my-10 md:my-20 w-40 md:w-[300px] h-0.5 mx-auto rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent "></div>

        <AboutSectionComp />
        <div className="my-10 md:my-20 w-40 md:w-[300px] h-0.5 mx-auto rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent "></div>
      </div>
    </>
  );
};

export default HomePage;
