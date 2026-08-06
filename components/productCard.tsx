//Next
import Image from "next/image";
//components
import { Rating } from "@/components/reui/rating";
//types
import type { Product } from "@/types/Product ";
import FavoriteButton from "./FavoriteButton";
//interface
interface ProductCardProps {
  product: Product;
  className?: string;
}
//-----------------------------
export default function ProductCard({
  product,
  className = "",
}: ProductCardProps) {
  return (
    <div className={`rounded-sm bg-background transition cursor-pointer ${className}`}>
      {/* Image */}
      <div className="relative overflow-hidden rounded-sm bg-secondary-foreground">
        <Image
          src={product.productImage}
          alt={product.productName}
          className="h-fit w-full object-cover transition duration-300 hover:scale-105"
        />
        <p className="absolute top-2 left-2 text-sm bg-secondary text-primary px-1.5 rounded-md">
          New
        </p>
        <FavoriteButton />
      </div>
      <div>
        {/* Content */}
        <div className="py-2 px-3 gap-2 flex flex-col">
          <h3 className="text-lg font-semibold line-clamp-1">
            {product.productName}
          </h3>
          <Rating rating={product.rate} showValue size="sm" />
          <p className="text-[18px] font-bold">{product.price} EP</p>
        </div>
      </div>
    </div>
  );
}
