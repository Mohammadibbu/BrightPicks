import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BackToHomeButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="btn absolute top-0 left-5 border-1 border-amber-50 group  text-amber-50 bg-transparent shimmer-effect"
      onClick={() => navigate("/")}
    >
      <FaArrowLeft
        stroke="0.5"
        className="inline-block mr-2 text-center group-hover:-translate-x-1 duration-300"
      />
      Back to Home
    </button>
  );
};

export default BackToHomeButton;
