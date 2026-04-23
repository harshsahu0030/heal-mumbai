import BlogSlider from "@/components/blog/BlogSlider";
import Contact from "@/components/helper/Contact";
import Testimonials from "@/components/helper/Testimonials";
import Treatments from "@/components/helper/Treatments";
import OurTreatment from "@/components/treatment/OurTreatment";
import { getTreatmentsList } from "@/lib/graphql/treatments";

const page = async () => {
  const treatments = await getTreatmentsList();

  return (
    <>
      <OurTreatment />
      <Treatments treatments={treatments} />
      <Contact />
      <Testimonials />
      <BlogSlider />
    </>
  );
};

export default page;
