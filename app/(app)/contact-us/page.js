import BlogSlider from "@/components/blog/BlogSlider";
import Contact from "@/components/helper/Contact";
import Testimonials from "@/components/helper/Testimonials";

const page = () => {
  return (
    <>
      <Contact />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60336.64424170194!2d72.8461594486328!3d19.061967199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c761558d0927%3A0xdb40abf7f533db8e!2sHEALINGHUB%20MULTI%20SPECIALITY%20HOMOEOPATHIC%20CLINIC!5e0!3m2!1sen!2sin!4v1776696098980!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        className="container h-100 w-full"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Testimonials />
      <BlogSlider />
    </>
  );
};

export default page;
