import Toastify, { showToast } from "../Components/Alert";
const HomePage = () => {
  document.body.addEventListener("keypress", () => {
    showToast("Site  Under Construction", "info", 5000);
  });
  return (
    <>
      <div className="homepage"></div>
      <Toastify />
    </>
  );
};

export default HomePage;
