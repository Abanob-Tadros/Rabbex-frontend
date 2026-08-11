"use client";

import { useFormContext } from "react-hook-form";
import { ProductFormData } from "./validation/schema";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"] as const;

export default function ProductSize() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  return (
    <section>
      {/* Title */}
      <h2 className="mb-2 text-lg font-semibold text-foreground">
        Size
      </h2>

      {/* Description */}
      <p className="mb-4 text-xs text-muted-foreground">
        Pick Available Sizes
      </p>

      {/* Options */}
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <label
            key={size}
            className="cursor-pointer"
          >
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
                border border-input
                bg-surface
                text-sm
                text-foreground
                transition-all
                duration-200

                hover:bg-background-hover

                peer-checked:border-accent
                peer-checked:bg-accent
                peer-checked:text-accent-foreground

                peer-focus-visible:ring-2
                peer-focus-visible:ring-accent
                peer-focus-visible:ring-offset-2
                peer-focus-visible:ring-offset-background
              "
            >
              {size}
            </span>
          </label>
        ))}
      </div>

      {/* Error */}
      {errors.sizes && (
        <p className="mt-2 text-xs text-destructive">
          {errors.sizes.message}
        </p>
      )}
    </section>
  );
}