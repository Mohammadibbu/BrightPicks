import { Toaster, toast } from "sonner";

export const showToast = (
  message,
  messageType = "info",
  duration = 3000,
  description = null
) => {
  const validTypes = ["info", "success", "error", "warning"];
  const type = validTypes.includes(messageType) ? messageType : "info";
  const options = {
    description,
    duration,

    style: {
      fontSize: "15px",
      borderRadius: "8px",
      fontFamily: "'Tagesschrift', system-ui",
    },
  };
  toast[type](message, options);
};

// Global toaster component
const Toastify = () => {
  return (
    <Toaster
      position="bottom-right"
      richColors
      swipeDirections={["right", "left"]}
    />
  );
};

export default Toastify;
