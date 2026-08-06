import { Icon } from "@iconify/react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface CategoryCardProps {
  categoryName: string;
  className?: string;
  categoryImage: StaticImageData | string;
}
export default function CategoryCard({
  categoryName,
  className,
  categoryImage,
}: CategoryCardProps) {
  return (
    <div
      className={`relative flex flex-col  items-center justify-center border 
        border-[#5757577c] rounded-md gap-2 overflow-hidden shrink-0 cursor-pointer`}
    >
      <Image
        className={`${className}  object-cover transition duration-300 hover:scale-105 rounded-md`}
        src={categoryImage}
        alt={categoryName}
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black to-transparent" />
      <div className="absolute bottom-3 left-5 flex flex-col  text-primary  ">
        <h3 className="text-2xl font-bold">{categoryName}</h3>
        <div className="flex items-center gap-1">
          <h3 className="text-lg">Shop Now</h3>
          <Icon
            icon="material-symbols:arrow-forward-rounded"
            className="text-white text-lg"
          />
        </div>
      </div>
    </div>
  );
}
