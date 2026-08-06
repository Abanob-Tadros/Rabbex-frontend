"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      onClick={() => setIsFavorite(!isFavorite)}
      className="absolute top-2 right-2 flex w-5 h-5 items-center justify-center rounded-full  transition-all hover:scale-110 active:scale-95"
    >
      <Icon
        icon={
          isFavorite
            ? "material-symbols:favorite-rounded"
            : "material-symbols:favorite-outline-rounded"
        }
        width={20}
        height={20}
        className={`transition-colors duration-300 ${
          isFavorite ? "text-red-500" : "text-gray-500"
        }`}
      />
    </button>
  );
}