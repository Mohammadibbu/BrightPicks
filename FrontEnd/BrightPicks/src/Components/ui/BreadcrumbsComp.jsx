import { Link } from "react-router-dom";

const BreadcrumbsComp = ({
  Src = "https://www.vmware.com/media/blt8c9a8aaca0ffd4ac/blte1b93630ba19e7b7/684afb8f96cee00561182e38/vcf9-web-header-2800x1000.png?width=1152",
  Page,
}) => {
  return (
    <div className="mt-20 relative">
      <img
        className="w-full h-[350px] object-cover -z-10"
        src={Src}
        alt="breadcrumb background"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#1d2838]/80 via-[#1d2838]/50 to-[#1d2838]/80 backdrop-blur-xs z-0"></div>
      <div className="absolute top-1/4 w-full py-5 px-6 flex items-center justify-center z-10">
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold leading-tight  text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
            {Page}
          </h1>

          <div className="mt-2 flex items-center justify-center space-x-2 text-white rounded-3xl p-2 bg-gray-200/20">
            <Link
              to="/"
              className="text-gray-800 hover:text-white duration-500 "
            >
              Home
            </Link>
            <span>&gt;</span>
            <span>{Page}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbsComp;
