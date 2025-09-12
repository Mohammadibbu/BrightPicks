import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import BreadcrumbsComp from "@components/ui/BreadcrumbsComp";

const AboutPage = () => {
  return (
    <div>
      {/* Breadcrumbs Section */}
      <BreadcrumbsComp
        Src="https://quartusbusiness.com/wp-content/uploads/2017/05/email-mkt-banner-bg.jpg"
        Page="About Us"
      />

      {/* Main About Us Section with Image */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-center text-white lg:text-left">
              About BrightPicks
            </h2>
            <p className="mt-4 text-xl text-center text-gray-300 max-w-3xl mx-auto lg:text-left lg:max-w-none">
              BrightPicks is a curated directory of high-quality YouTube
              channels focused on technology, coding, engineering, personal
              development, and more. In a content-saturated world, BrightPicks
              helps learners save time and discover the most valuable
              educational resources on YouTube — no algorithms, no noise, just
              hand-picked learning.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="https://via.placeholder.com/500x300?text=About+BrightPicks"
              alt="About BrightPicks"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Mission Section with Image */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="https://via.placeholder.com/500x300?text=Our+Mission"
              alt="Our Mission"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-semibold text-center text-white lg:text-left">
              Our Mission
            </h3>
            <p className="mt-4 text-lg text-center text-gray-300 lg:text-left">
              At BrightPicks, we believe that learning should be accessible,
              relevant, and transformative. Our mission is to empower
              self-learners by curating high-quality, impactful educational
              content that saves you time and enriches your knowledge journey.
              We carefully vet and validate each channel to ensure that only the
              freshest, most insightful, and relevant content is featured.
            </p>
          </div>
        </div>
      </section>

      {/* How We Help Section with Image */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-semibold text-center text-white lg:text-left">
              How We Help You Learn Smarter, Not Harder
            </h3>
            <p className="mt-4 text-lg text-center text-gray-300 lg:text-left max-w-3xl mx-auto">
              Whether you’re a beginner learning to code, a developer diving
              deeper into your tech stack, or a curious mind exploring new
              fields, BrightPicks offers a tailored approach to help you
              succeed. We organize content by topic, skill level, and language,
              allowing you to quickly find what’s most relevant for your current
              goals. With BrightPicks, there are no distractions — just curated
              learning content that gets you closer to mastering your craft.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="https://via.placeholder.com/500x300?text=How+We+Help"
              alt="How We Help"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
          <h3 className="text-3xl font-semibold text-white">Stay Connected</h3>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Follow us on social media to stay updated with the latest additions
            to our curated collection and join the conversation about learning
            and self-improvement.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              to="#"
              className="mx-4 text-2xl text-gray-300 hover:text-white"
            >
              <FaFacebook />
            </Link>
            <Link
              to="#"
              className="mx-4 text-2xl text-gray-300 hover:text-white"
            >
              <FaTwitter />
            </Link>
            <Link
              to="#"
              className="mx-4 text-2xl text-gray-300 hover:text-white"
            >
              <FaInstagram />
            </Link>
            <Link
              to="#"
              className="mx-4 text-2xl text-gray-300 hover:text-white"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
