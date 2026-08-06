import Image from "next/image";
import Link from "next/link";

import ProductCard from "@/components/productCard";
import { productData } from "@/types/data";
//-----------------------------

export default function NewDrops() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">New Drops</h1>
      <div className=" flex flex-row justify-between items-center overflow-x-auto scrollbar-none mb-4 gap-4">
  {productData.map((product) => (
    <ProductCard
    className="w-[150px] md:w-[250px] flex-shrink-0"
      key={product.productName}
      product={product}
    />
  ))}
</div>
    </div>
  );
}
