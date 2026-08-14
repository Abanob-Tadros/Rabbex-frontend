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
    <section className="mt-6 rounded-lg border border-border bg-card p-5 shadow-sm">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-base font-semibold tracking-tight text-foreground">
          Variant Stock
        </h2>

        <p className="mt-1 text-xs text-muted-foreground">
          Set the stock for each color and size combination
        </p>
      </div>

      {/* Variants */}
      <div className="space-y-4">
        {colors.map((color) => (
          <div
            key={color.hex}
            className="
              overflow-hidden
              rounded-lg
              border border-border
              bg-surface
              transition-shadow
              duration-200
              hover:shadow-sm
            "
          >
            {/* Color Header */}
            <div
              className="
                flex items-center gap-3
                border-b border-border
                bg-background
                px-4 py-3
              "
            >
              <span
                className="
                  h-7 w-7
                  shrink-0
                  rounded-full
                  border-2 border-surface
                  shadow-sm
                  ring-1 ring-border
                "
                style={{
                  backgroundColor: color.hex,
                }}
              />

              <div>
                <p className="text-sm font-semibold text-foreground">
                  {color.name}
                </p>

                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  Stock by size
                </p>
              </div>
            </div>

            {/* Sizes */}
            <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-4">
              {sizes.map((size) => (
                <div key={size}>
                  <label
                    htmlFor={`${color.name}-${size}`}
                    className="mb-1.5 block text-xs font-medium text-muted-foreground"
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
                      font-medium
                      text-foreground
                      outline-none
                      transition-all
                      duration-200

                      placeholder:text-muted-foreground

                      hover:border-accent/50

                      focus:border-accent
                      focus:ring-2
                      focus:ring-accent/20
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