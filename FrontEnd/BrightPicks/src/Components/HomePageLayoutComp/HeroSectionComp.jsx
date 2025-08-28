import React from "react";
import { FaBolt } from "react-icons/fa";

const HeroSectionComp = () => {
  return (
    <div className="max-w-5xl mx-auto text-center mt-30 px-10 sm:px-6 lg:px-8 ">
      <p
        // style={{ fontFamily: "'Tagesschrift', system-ui" }}
        className="bg-amber-100  text-gray-800 font-semibold mb-5 inline-block rounded-full text-[8px] sm:text-xs sm:px-3 sm:py-1 px-2 py-0.5"
      >
        <FaBolt className="inline mr-1.5" />
        Discover the Best Learning Content
      </p>
      <h1
        // style={{ fontFamily: "'Tagesschrift', system-ui" }}
        className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500"
      >
        Curated YouTube Channels <br className="hidden sm:block" /> for Your
        Growth!
      </h1>

      <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
        Discover hand-picked YouTube channels and learning resources across
        coding, engineering, tech reviews, and personal development. Save time
        and learn from the best.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <button
          className=" btn-primary  shimmer-effect"
          onClick={() => (location.href = "/browse")}
        >
          Explore Channels
        </button>
        <button className="relative shimmer-effect overflow-hidden px-6 py-3 bg-transparent border border-gray-500/30 backdrop:blur-3xl  hover:border-white text-white font-medium rounded-md transition duration-300">
          <span className="bg-glow-green-blue"></span>Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroSectionComp;
