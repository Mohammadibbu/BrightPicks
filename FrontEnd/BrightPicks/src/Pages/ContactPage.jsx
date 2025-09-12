import BackToHomeButton from "@components/ui/BackToHomeBtn";
import BreadcrumbsComp from "@components/ui/BreadcrumbsComp";
const ContactPage = () => {
  return (
    <>
      <BreadcrumbsComp
        Src={"https://www.zonaltechsolution.com/images/contact-bg-2.jpg"}
        Page={"Contact"}
      />
      <div className="mt-20 relative p-20">
        <BackToHomeButton />
        <div className="text-white">ContactPage</div>
      </div>
    </>
  );
};
export default ContactPage;
