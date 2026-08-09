"use client";

import { useFormContext } from "react-hook-form";
import { ProductFormData } from "./validation/schema";

export default function ProductSize() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"] as const;

  return (
    <section className="rounded-2xl  ">
      <div className="flex flex-col gap-0.5">
        {/* Title */}
        <label className="text-lg font-medium">Size</label>

        {/* Description */}
        <span className="text-[14px] text-gray-400 mb-2">
          Pick Available Sizes
        </span>
      </div>
      {/* Options */}
      <div className="flex gap-2">
        {sizes.map((size) => (
          <label key={size} className="cursor-pointer">
            <input
              type="checkbox"
              value={size}
              {...register("sizes")}
              className="peer sr-only"
            />

            <span
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-md
                bg-neutral-100
                text-sm
                text-secondary
                transition

                peer-checked:bg-green-300
                peer-checked:text-neutral-900

                hover:bg-neutral-200
              "
            >
              {size}
            </span>
          </label>
        ))}
      </div>

      {/* Error */}
      {errors.sizes && (
        <p className="mt-2 text-xs text-red-500">{errors.sizes.message}</p>
      )}
    </section>
  );
}
