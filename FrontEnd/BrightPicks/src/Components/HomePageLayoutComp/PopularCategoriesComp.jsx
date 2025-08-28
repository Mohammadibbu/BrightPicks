import React from "react";
import CategoriesCard from "../CategoriesCard"; // Adjust path as needed

// Example categories data (you can replace with real/fetched data)
const categoriesData = [
  {
    categoryName: "Programming",
    categoryDescription:
      "Best YouTube channels to learn software development and programming languages.",
    tags: ["JavaScript", "Python", "React", "Web Dev"],
    ChannelCount: 20,
  },
  {
    categoryName: "Fitness",
    categoryDescription:
      "Top fitness creators to help you stay active, healthy, and strong.",
    tags: ["Workout", "Nutrition", "Cardio", "Strength"],
    ChannelCount: 12,
  },
  {
    categoryName: "Art & Design",
    categoryDescription:
      "Learn illustration, graphic design, and creativity from top creators.",
    tags: ["Photoshop", "Design", "Creativity", "Illustration"],
    ChannelCount: 10,
  },
  // Add more categories as needed
];

const PopularCategoriesSection = () => {
  const handleExplore = (categoryName) => {
    console.log(`Explore clicked for: ${categoryName}`);
    // You can route to another page or trigger modal here
  };

  return (
    <section className="max-w-7xl mx-auto  mb-20  ">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Popular Categories
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Start your learning journey with our most popular categories
        </p>
      </div>

      <div className="flex flex-wrap justify-center">
        {categoriesData.map((cat) => (
          <CategoriesCard
            key={cat.categoryName}
            Catagory={cat}
            onExplore={handleExplore}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularCategoriesSection;
