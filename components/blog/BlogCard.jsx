import Link from "next/link";
import Image from "next/image";
import Pain04 from "@/public/pain04.jpeg";

const BlogCard = () => {
  return (
    <div className="bg-(--bg-white) rounded-lg shadow-md overflow-hidden h-full w-full flex flex-col border-b-6 border-(--secondary-sage) hover:border-(--primary-forest) transition-all ease-in-out duration-300 group/blog cursor-pointer">
      <div className="h-[60%] w-full overflow-hidden">
        <Image
          height={500}
          width={500}
          src={Pain04}
          alt="pain"
          placeholder="blur"
          className="object-cover w-full h-full group-hover/blog:scale-125 ease-in-out duration-300 transition-all ove"
        />
      </div>
      <div className="h-[40%] w-full p-4 flex flex-col gap-2">
        <h2 className="text-xl font-bold group-hover/blog:text-(--accent-clay) transition-all ease-in-out duration-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>

        <div className="flex items-center gap-3 text-sm italic">
          <span>September 10, 2026</span>
          <span>September 10, 2026</span>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          quisquam qui deserunt aliquam repudiandae fugit maxime amet sunt.
        </p>

        <Link href="" className="font-semibold text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
