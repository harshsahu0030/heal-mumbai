import Contact from "@/components/helper/Contact";
import Doctor from "@/components/helper/Doctor";
import FAQs from "@/components/helper/FAQs";
import Testimonials from "@/components/helper/Testimonials";
// import Treatments from "@/components/helper/Treatments";
import Hero from "@/components/home/Hero";
import PainAgitation from "@/components/home/PainAgitation";
import Solution from "@/components/home/Solution";
import { homeFaqs } from "@/lib/faqs";
// import { getTreatmentsList } from "@/lib/graphql/treatments";

const Home = async () => {
  // const treatments = await getTreatmentsList();

  return (
    <>
      {/* <Hero treatments={treatments} /> */}
      <PainAgitation />
      <Solution />
      {/* <Treatments treatments={treatments} /> */}
      <Doctor />
      <Contact />
      <Testimonials />
      <FAQs faqs={homeFaqs} />
    </>
  );
};

export default Home;
