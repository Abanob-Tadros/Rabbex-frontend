"use client";

import { useFormContext } from "react-hook-form";
import { ProductFormData } from "./validation/schema";

const colors = [
  { name: "Black", value: "#000000" },
  { name: "White", value: "#FFFFFF" },
  { name: "Red", value: "#EF4444" },
  { name: "Blue", value: "#3B82F6" },
  { name: "Green", value: "#22C55E" },
  { name: "Yellow", value: "#EAB308" },
];

export default function ProductColor() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  return (
    <section className="rounded-2xl bg-white p-4">
      <h2 className="mb-1 text-sm font-semibold text-neutral-900">
        Product Color
      </h2>

      <p className="mb-4 text-xs text-neutral-400">
        Pick Available Colors
      </p>

      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <label
            key={color.value}
            className="cursor-pointer"
          >
            <input
              type="checkbox"
              value={color.value}
              {...register("colors")}
              className="peer sr-only"
            />

            <div
              title={color.name}
              className="
                h-9 w-9 rounded-full
                border border-neutral-200
                transition
                peer-checked:scale-110
                peer-checked:ring-2
                peer-checked:ring-green-300
                peer-checked:ring-offset-2
              "
              style={{
                backgroundColor: color.value,
              }}
            />
          </label>
        ))}
      </div>

      {errors.colors && (
        <p className="mt-2 text-xs text-red-500">
          {errors.colors.message}
        </p>
      )}
    </section>
  );
}