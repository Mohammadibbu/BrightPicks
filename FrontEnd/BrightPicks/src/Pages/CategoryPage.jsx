import {
  axiosInstance as axios,
  handleAxiosError,
} from "@utils/Axios/AxiosInstance";
import { showToast } from "@components/ui/Alert.jsx";
import { useEffect, useState } from "react";
import CategoriesCard from "@components/CategoriesCard.jsx";
import Skeleton from "@components/ui/Skeleton.jsx";
const CategoryPage = () => {
  const [CatagoriesData, setCatagoriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      setLoading(true); // Start loading
      const response = await axios.get("/categories");
      setCatagoriesData(response.data.data);
      response.data.data.forEach((element) => {
        console.log(element.categoryName);
      });
    } catch (error) {
      const errorMessage = handleAxiosError(error);
      showToast(errorMessage, "error");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };
  return (
    <>
      {loading ? (
        <div className="flex flex-wrap justify-center gap-2 p-4 ">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-2 p-4">
          {CatagoriesData.map((category) => (
            <CategoriesCard key={category._id} Catagory={category} />
          ))}
        </div>
      )}
    </>
  );
};

export default CategoryPage;
