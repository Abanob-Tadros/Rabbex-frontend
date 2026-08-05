import { Icon } from "@iconify/react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface CategoryCardProps {
  categoryName: string;
  categoryImage: StaticImageData | string;
}
export default function CategoryCard({
  categoryName,
  categoryImage,
}: CategoryCardProps) {
  return (
    <div className="relative flex flex-col max-w-[320px]  items-center justify-center border border-[#5757577c] rounded-md gap-2">
      <Image src={categoryImage} alt={categoryName} />
      <div className="absolute bottom-0 left-0 right-0 flex justify-around items-center text-primary bg-gradient-to-b from-[#03030308] to-[#000000] py-1">
        {/* <div className=""></div> */}
        <p className="text-lg">{categoryName}</p>
        <Icon
          icon="material-symbols:arrow-forward-rounded"
          className="text-white text-lg"
        />
      </div>
    </div>
  );
}
