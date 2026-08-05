//components
import CategoryCard from "@/components/CategoryCard";
import Tshirt from "@/public/image/Category/Tshert.png";
import Sweetpants from "@/public/image/Category/Sweetpants.png";
import Link from "next/link";
//data
const CategoryData = [
  { categoryName: "T-Shirts", categoryImage: Tshirt },
  { categoryName: "Sweetpants", categoryImage: Sweetpants },
  { categoryName: "Sweetpants", categoryImage: Sweetpants },
  { categoryName: "Sweetpants", categoryImage: Sweetpants },
  { categoryName: "Sweetpants", categoryImage: Sweetpants },
];
//-----------------------------
export default function CategorySection() {
  return (
    <div>
        <div className="flex flex-row justify-between items-center mb-4">
      <div className="flex flex-col  justify-start gap-2 mb-4">
        {/* TOP title */}

        <h1 className="text-4xl font-bold">shop by category</h1>
        <p className="text-sm">everything you need</p>
        </div>
        <Link href="/category" className="text-sm text-Primary hover:text-primary-hover hover:underline">
          View All 
        </Link>
      </div>
      {/* Category Section */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
        {CategoryData.map((Category, index) => (
          <CategoryCard
            key={index}
            categoryName={Category.categoryName}
            categoryImage={Category.categoryImage}
          />
        ))}
      </div>
    </div>
  );
}
