import FAQ from "./FAQ";

const FAQs = ({ faqs }) => {
  return (
    <section className="container w-full flex flex-col gap-5 py-10">
      <h3 className="font-medium text-lg">Answers you should to know</h3>

      <div className="grid md:grid-cols-2 gap-5">
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
          Frequently Asked Questions (FAQs)
        </h2>

        <p className="">
          Tired of recurring health issues and unsure what to do next? These
          answers will help you understand how natural homeopathy can finally
          give you lasting relief and peace of mind.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-5 pt-10">
        {faqs?.map((item, index) => (
          <FAQ key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
