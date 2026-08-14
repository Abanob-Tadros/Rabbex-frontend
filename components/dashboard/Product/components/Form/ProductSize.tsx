"use client";

import { useFormContext } from "react-hook-form";
import { ProductFormData } from "./validation/schema";
import ValidationErrorUi from "@/components/ValidationErrorUi";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"] as const;

export default function ProductSize() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  return (
    <section className="rounded-lg border border-border bg-card p-5 shadow-sm">
      {/* Title */}
      <div className="mb-5">
        <h2 className="text-base font-semibold tracking-tight text-foreground">
          Size
        </h2>

        <p className="mt-1 text-xs text-muted-foreground">
          Pick Available Sizes
        </p>
      </div>

      {/* Options */}
      <div className="flex flex-wrap gap-2.5">
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
                flex h-11 min-w-11 items-center justify-center
                rounded-md
                border border-input
                bg-surface
                px-3
                text-sm font-medium
                text-foreground
                transition-all duration-200

                hover:border-accent/50
                hover:bg-background-hover

                peer-checked:border-accent
                peer-checked:bg-accent
                peer-checked:text-accent-foreground
                peer-checked:shadow-sm

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
       <ValidationErrorUi message={errors.sizes?.message} />
    </section>
  );
}
