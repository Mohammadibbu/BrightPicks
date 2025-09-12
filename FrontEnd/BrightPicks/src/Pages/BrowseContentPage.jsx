import BackToHomeButton from "@components/ui/BackToHomeBtn";
import BreadcrumbsComp from "@components/ui/BreadcrumbsComp";

const BrowseContentPage = () => {
  return (
    <>
      <BreadcrumbsComp
        Src={
          "https://www.shutterstock.com/image-photo/document-management-system-dms-being-600nw-2135267769.jpg"
        }
        Page={"Browse"}
      />
      <div className="mt-10 relative p-20">
        <BackToHomeButton />
        <div className="text-white">BrowseContent</div>
      </div>
    </>
  );
};

export default BrowseContentPage;
