"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

export default function AddToCartButton() {
        const [AddToCart, setAddToCart] = useState(false);
  return (
   <button
      onClick={() => setAddToCart(!AddToCart)}
      className="absolute top-2 right-2 flex w-7 h-7 items-center justify-center rounded-full  transition-all hover:scale-110 active:scale-95 cursor-pointer"
    >
      <Icon
        icon={
          AddToCart
            ? "material-symbols:favorite-rounded"
            : "material-symbols:favorite-outline-rounded"
        }
        width={40}
        height={40}
        className={`transition-colors duration-300 ${
          AddToCart ? "text-red-500" : "text-gray-500"
        }`}
      />
    </button>
  )
}





