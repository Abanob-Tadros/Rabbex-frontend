"use client";

import { useFormContext, useWatch } from "react-hook-form";
import { ProductFormData } from "./validation/schema";

const colors = [
  { name: "Black", hex: "#000000" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Red", hex: "#EF4444" },
  { name: "Blue", hex: "#3B82F6" },
  { name: "Green", hex: "#22C55E" },
  { name: "Yellow", hex: "#EAB308" },
];

export default function ProductColor() {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  const selectedColors = useWatch({
    control,
    name: "colors",
  }) ?? [];

  const isSelected = (hex: string) => {
    return selectedColors.some((color) => color.hex === hex);
  };

  const toggleColor = (color: (typeof colors)[number]) => {
    const exists = selectedColors.some(
      (selected) => selected.hex === color.hex
    );

    const newColors = exists
      ? selectedColors.filter(
          (selected) => selected.hex !== color.hex
        )
      : [...selectedColors, color];

    setValue("colors", newColors, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  return (
    <section>
      {/* Title */}
      <h2 className="mb-2 text-lg font-semibold text-foreground">
        Product Color
      </h2>

      {/* Description */}
      <p className="mb-4 text-xs text-muted-foreground">
        Pick Available Colors
      </p>

      {/* Colors */}
      <div className="flex flex-wrap gap-4">
        {colors.map((color) => {
          const selected = isSelected(color.hex);

          return (
            <button
              key={color.hex}
              type="button"
              onClick={() => toggleColor(color)}
              title={color.name}
              aria-label={`Select ${color.name}`}
              aria-pressed={selected}
              className={`
                relative
                h-10 w-10
                rounded-full
                border
                transition-all
                duration-200
                hover:scale-105
                focus:outline-none
                focus:ring-2
                focus:ring-accent
                focus:ring-offset-2
                focus:ring-offset-background

                ${
                  selected
                    ? "scale-110 ring-2 ring-accent ring-offset-2 ring-offset-background"
                    : "border-input"
                }
              `}
              style={{
                backgroundColor: color.hex,
              }}
            >
              {/* Check */}
              {selected && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span
                    className={`
                      flex h-4 w-4 items-center justify-center
                      rounded-full
                      text-[10px] font-bold
                      ${
                        color.hex === "#FFFFFF" ||
                        color.hex === "#EAB308"
                          ? "bg-secondary text-primary"
                          : "bg-primary text-primary-foreground"
                      }
                    `}
                  >
                    ✓
                  </span>
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Error */}
      {errors.colors && (
        <p className="mt-2 text-xs text-destructive">
          {errors.colors.message}
        </p>
      )}
    </section>
  );
}