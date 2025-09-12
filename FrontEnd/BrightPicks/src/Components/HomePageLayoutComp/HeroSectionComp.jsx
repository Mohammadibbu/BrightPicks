import { FaBolt } from "react-icons/fa";
import hero from "@assets/hero.mp4";
import { FaArrowRight } from "react-icons/fa";
const HeroSectionComp = () => {
  return (
    <div className="max-w-full  lg:h-[650px] mx-auto text-center mt-20 p-10  sm:p-15 lg:p-30 relative ">
      <div className="absolute top-0 left-0 w-full h-full  bg-gradient-to-t from-[#1d2838]/80 via-[#1d2838]/50 to-[#1d2838]/80 backdrop-blur-xs z-[-1]"></div>
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2] "
        // autoPlay
        // loop
        muted
        aria-label="Background video showcasing learning content"
      >
        <source src={hero} type="video/mp4" />
        {/* Your browser does not support the video tag. */}
      </video>

      <p className="bg-amber-100 text-gray-800 font-semibold mb-5 inline-block rounded-full text-[8px] sm:text-xs sm:px-3 sm:py-1 px-2 py-0.5">
        <FaBolt className="inline mr-1.5" />
        Discover the Best Learning Content
      </p>

      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
        Curated YouTube Channels <br className="hidden sm:block" /> for Your
        Growth!
      </h1>

      <p className="mt-6 text-base sm:text-lg lg:text-xl text-white max-w-3xl mx-auto">
        Discover hand-picked YouTube channels and learning resources across
        coding, engineering, tech reviews, and personal development. Save time
        and learn from the best.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <button
          className="btn-primary shimmer-effect group"
          onClick={() => (location.href = "/browse")}
        >
          Explore Channels
          <FaArrowRight
            stroke="0.5"
            className="inline-block ml-2 text-center group-hover:translate-x-1 duration-300"
          />
        </button>
        <button className="relative shimmer-effect overflow-hidden px-6 py-3 bg-transparent border cursor-pointer backdrop-blur-3xl border-white text-white font-medium rounded-md transition duration-300">
          <span className="bg-glow-green-blue"></span>Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroSectionComp;
