//components
import CategoryCard from "@/components/CategoryCard";
//Next
import Link from "next/link";
import { StaticImageData } from "next/image";
//data Images
import Tshirt from "@/public/image/Category/T-Shirts.png";
import Sweetpants from "@/public/image/Category/Sweetpants.png";
import Hoodies from "@/public/image/Category/Hoodies.png";
import Shose from "@/public/image/Category/Shose.png";
import Bags from "@/public/image/Category/Bags.png";
// types
interface iCategory {
  categoryName: string;
  categoryImage: StaticImageData | string;
}
//data
const CategoryData: iCategory[] = [
  { categoryName: "T-Shirts", categoryImage: Tshirt },
  { categoryName: "Hoodies", categoryImage: Hoodies },
  { categoryName: "Sweet pants", categoryImage: Sweetpants },
  { categoryName: "Shose", categoryImage: Shose },
  { categoryName: "Bags", categoryImage: Bags },
];
//-----------------------------
export default function CategorySection() {
  return (
    <div className="flex flex-col gap-4">
     

          {/* TOP title */}
        <div className="w-fit flex flex-col justify-start gap-2">
          <h1 className="text-3xl md:text-4xl font-bold">shop by category</h1>
          <p className="text-sm">everything you need</p>
        </div>
      
      {/* Category Section */}
      <div className=" flex flex-row justify-between items-center overflow-x-auto scrollbar-none mb-4 gap-4">
        {CategoryData.map((Category, index) => (
          <CategoryCard
            className="w-50 md:w-75 h-50 md:h-75"
            key={index}
            categoryName={Category.categoryName}
            categoryImage={Category.categoryImage}
          />
        ))}
      </div>
    </div>
  );
}
