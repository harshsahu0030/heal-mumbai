import AboutUs from "@/components/about/AboutUs";
import BlogSlider from "@/components/blog/BlogSlider";
import Contact from "@/components/helper/Contact";
import Doctor from "@/components/helper/Doctor";
import Testimonials from "@/components/helper/Testimonials";

const page = () => {
  return (
    <>
      <AboutUs />
      <Doctor />
      <Contact />
      <Testimonials />
      <BlogSlider />
    </>
  );
};

export default page;
