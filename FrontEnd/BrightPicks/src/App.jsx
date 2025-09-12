import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import BrowseContentPage from "./Pages/BrowseContentPage";
import NotFound from "./NotFound";
import Header from "./Components/HeaderFooter/Header";
import Footer from "./Components/HeaderFooter/Footer";
import CategoryPage from "./Pages/CategoryPage";
import ContactPage from "./Pages/ContactPage";
import Toastify from "./Components/ui/Alert";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/browse" element={<BrowseContentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/categories" element={<CategoryPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      <Toastify />
    </>
  );
}

export default App;
