import React from "react";
import { showToast } from "@components/ui/Alert";
import HeroSectionComp from "@components/HomePageLayoutComp/HeroSectionComp";
import AboutSectionComp from "@components/HomePageLayoutComp/AboutSectionComp";
import PopularCategories from "@components/HomePageLayoutComp/PopularCategoriesComp";

const HomePage = () => {
  return (
    <>
      <div>
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
