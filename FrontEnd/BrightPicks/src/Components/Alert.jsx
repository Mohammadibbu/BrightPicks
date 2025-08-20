import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToast = (message, messageType = "info", duration = 3000) => {
  const validTypes = ["info", "success", "error", "warning", "warn"];
  const type = validTypes.includes(messageType) ? messageType : "info";

  const options = {
    position: "bottom-right",
    autoClose: duration,
    hideProgressBar: false, // Show a progress bar
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    closeButton: true,
    progress: undefined,
    theme: "dark",
    // icon: false,
    // style: {
    //   fontSize: "14px",
    //   borderRadius: "8px",
    //   backgroundColor: "#fff",
    //   color: "#333",
    //   boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    // },
  };

  toast[type](message, options);
};

const Toastify = () => {
  return <ToastContainer />;
};

export default Toastify;
