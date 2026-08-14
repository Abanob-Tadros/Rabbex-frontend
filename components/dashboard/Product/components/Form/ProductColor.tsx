"use client";

import { useFormContext, useWatch } from "react-hook-form";
import { ProductFormData } from "./validation/schema";
import ValidationErrorUi from "@/components/ValidationErrorUi";

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
    <section className="rounded-lg border border-border bg-card p-5 shadow-sm">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-base font-semibold tracking-tight text-foreground">
          Product Color
        </h2>

        <p className="mt-1 text-xs text-muted-foreground">
          Pick Available Colors
        </p>
      </div>

      {/* Colors */}
      <div className="flex flex-wrap gap-3">
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
                group
                relative
                h-11 w-11
                rounded-full
                border
                transition-all
                duration-200
                hover:scale-105
                focus:outline-none
                focus:ring-2
                focus:ring-accent
                focus:ring-offset-2
                focus:ring-offset-card

                ${
                  selected
                    ? "scale-110 ring-2 ring-accent ring-offset-2 ring-offset-card"
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
                      flex h-5 w-5 items-center justify-center
                      rounded-full
                      text-[10px] font-bold
                      shadow-sm
                      ${
                        color.hex === "#FFFFFF" ||
                        color.hex === "#EAB308"
                          ? "bg-secondary text-secondary-foreground"
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
       <ValidationErrorUi message={errors.colors?.message} />
    </section>
  );
}