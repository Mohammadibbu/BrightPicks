import { HiArrowRight } from "react-icons/hi2";
import { LuTags } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import {
  FaCode,
  FaGraduationCap,
  FaDumbbell,
  FaUtensils,
  FaLaptopCode,
  FaMoneyBillWave,
  FaPlaneDeparture,
  FaPaintBrush,
  FaGamepad,
  FaMusic,
  FaFlask,
  FaLandmark,
  FaHammer,
  FaBriefcase,
  FaHeartbeat,
  FaQuestionCircle,
} from "react-icons/fa";

// Category-to-icon mapping
const categoryIcons = {
  Programming: <FaCode />,
  Education: <FaGraduationCap />,
  Fitness: <FaDumbbell />,
  Cooking: <FaUtensils />,
  Technology: <FaLaptopCode />,
  Finance: <FaMoneyBillWave />,
  Travel: <FaPlaneDeparture />,
  "Art & Design": <FaPaintBrush />,
  Gaming: <FaGamepad />,
  Music: <FaMusic />,
  Science: <FaFlask />,
  History: <FaLandmark />,
  "DIY & Crafts": <FaHammer />,
  Business: <FaBriefcase />,
  Health: <FaHeartbeat />,
};

const CategoriesCard = ({ Catagory, onExplore }) => {
  const {
    categoryName,
    categoryDescription,
    tags = [],
    ChannelCount = 10,
  } = Catagory;

  const Icon = categoryIcons[categoryName] || <FaQuestionCircle />;

  return (
    <div
      className="relative p-5 group w-80 sm:w-96 
  hover:scale-105 hover:shadow-2xl transition-all duration-300 
  rounded-2xl mx-5 mt-4 overflow-hidden 
  bg-gray-900/30 backdrop-blur-md border border-white/10 shadow-lg shimmer-effect"
    >
      <div className="bg-glow-green-blue"></div>
      <div className="bg-glow-purple-cyan"></div>

      <HiArrowRight
        className="absolute top-5 right-5 text-xl font-extrabold text-white 
    transition-transform duration-500 group-hover:translate-x-10 
    group-hover:rotate-[340deg] group-hover:text-accent"
        strokeWidth={1.5}
      />

      <div className="text-[40px] text-primary group-hover:text-muted transition-transform duration-300 group-hover:translate-x-4">
        {Icon}
      </div>

      <h2 className="font-bold text-xl mt-7 text-white group-hover:text-accent transition duration-300">
        {categoryName || "Unknown Category"}
      </h2>

      <p className="py-2 text-muted line-clamp-3">{categoryDescription}</p>

      <p className="flex items-center text-muted text-[13px] gap-1 mt-3 mb-3.5">
        <FaRegUser className="text-sm" />
        {`${ChannelCount}+ Channels`}
      </p>

      {tags.length > 0 ? (
        <div className="flex flex-wrap items-center gap-2 mb-4 mt-3">
          <LuTags className="text-muted" />
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="bg-divider text-xs bg-amber-100 text-black font-medium px-2.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="bg-accent text-xs font-medium px-2.5 py-0.5 rounded text-white">
              {`${tags.length - 4}+ more`}
            </span>
          )}
        </div>
      ) : (
        <p className="text-sm text-muted italic mt-2">No tags available</p>
      )}

      <button
        type="button"
        onClick={() => onExplore?.(categoryName)}
        className="relative overflow-hidden cursor-pointer text-white 
  inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 
  hover:from-accent hover:via-highlight hover:to-primary
  focus:ring-2 focus:outline-none focus:ring-accent
  font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 
  transition-all duration-300 w-full group/button shadow-lg shimmer-effect"
      >
        <div className="bg-glow-green-blue"></div>
        <span className="relative z-10">Explore</span>

        {/* Animated Arrow */}
        <HiArrowRight
          className="absolute bottom-3 right-4 text-xl font-extrabold text-white 
    transition-all duration-500 transform translate-x-8 opacity-0 
    group-hover:translate-x-0 group-hover:opacity-100 
    group-hover:rotate-360"
          strokeWidth={1}
        />
      </button>
    </div>
  );
};

export default CategoriesCard;
