"use client";

import { useFormContext, useWatch } from "react-hook-form";
import { ProductFormData } from "./validation/schema";

export default function VariantStock() {
  const { control, register } = useFormContext<ProductFormData>();

  const colors = useWatch({
    control,
    name: "colors",
  }) ?? [];

  const sizes = useWatch({
    control,
    name: "sizes",
  }) ?? [];

  if (!colors.length || !sizes.length) {
    return null;
  }

  return (
    <section className="mt-6">
      <h2 className="mb-2 text-lg font-semibold text-foreground">
        Variant Stock
      </h2>

      <p className="mb-4 text-xs text-muted-foreground">
        Set the stock for each color and size combination
      </p>

      <div className="space-y-4">
        {colors.map((color) => (
          <div
            key={color.hex}
            className="rounded-lg border border-input bg-card p-4"
          >
            {/* Color */}
            <div className="mb-4 flex items-center gap-2">
              <span
                className="h-5 w-5 rounded-full border border-input"
                style={{
                  backgroundColor: color.hex,
                }}
              />

              <span className="text-sm font-medium text-foreground">
                {color.name}
              </span>
            </div>

            {/* Sizes */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {sizes.map((size) => (
                <div key={size}>
                  <label
                    htmlFor={`${color.name}-${size}`}
                    className="mb-1.5 block text-xs text-muted-foreground"
                  >
                    {size}
                  </label>

                  <input
                    id={`${color.name}-${size}`}
                    type="number"
                    min="0"
                    placeholder="0"
                    {...register(
                      `variantStock.${color.name}.${size}`,
                      {
                        valueAsNumber: true,
                      }
                    )}
                    className="
                      h-10
                      w-full
                      rounded-md
                      border border-input
                      bg-surface
                      px-3
                      text-sm
                      text-foreground
                      outline-none
                      transition
                      placeholder:text-muted-foreground

                      focus:border-accent
                      focus:ring-2
                      focus:ring-accent
                    "
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}