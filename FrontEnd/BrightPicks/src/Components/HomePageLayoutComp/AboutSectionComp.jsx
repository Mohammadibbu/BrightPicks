import React from "react";
import { FaBullseye, FaBolt, FaBook } from "react-icons/fa"; // Using react-icons for emojis

const AboutSectionComp = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Why BrightPicks?
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          We do the research so you don't have to.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* Feature 1 */}
        <div className="relative overflow-hidden bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl  transition duration-300 shimmer-effect">
          <div className="text-green-400 text-3xl mb-4">
            <FaBullseye />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Hand-Curated Quality
          </h3>
          <p className="text-gray-400">
            Every channel is personally reviewed and tested by our team. We only
            recommend content that provides real educational value.
          </p>
        </div>

        {/* Feature 2 */}
        <div
          className="relative overflow-hidden bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl  transition duration-300   
            shimmer-effect"
        >
          <div className="text-yellow-400 text-3xl mb-4">
            <FaBolt />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Save Time</h3>
          <p className="text-gray-400">
            No more endless scrolling through YouTube. We've done the heavy
            lifting to find the best educational channels in each category.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="relative overflow-hidden bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl  transition duration-300 shimmer-effect">
          <div className="text-blue-400 text-3xl mb-4">
            <FaBook />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Organized Learning
          </h3>
          <p className="text-gray-400">
            Channels are organized by skill level, language, and topic tags to
            help you find exactly what you need for your learning goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionComp;
