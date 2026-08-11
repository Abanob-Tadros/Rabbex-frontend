"use client";

import { useFormContext } from "react-hook-form";
import { ProductFormData } from "./validation/schema";

export default function Pricing() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-primary">
        Pricing And Stock
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

        {/* Price */}
        <div className="space-y-1.5">
          <label
            htmlFor="price"
            className="text-xs font-medium text-primary"
          >
            Base Pricing
          </label>

          <input
            id="price"
            type="number"
            step="0.01"
            placeholder="$99.99"
            {...register("price", {
              valueAsNumber: true,
            })}
            className="h-10 w-full rounded-md border-0 bg-neutral-100 px-3 text-sm outline-none"
          />

          {errors.price && (
            <p className="text-xs text-red-500">
              {errors.price.message}
            </p>
          )}
        </div>

        {/* Discount */}
        <div className="space-y-1.5">
          <label
            htmlFor="discount"
            className="text-xs font-medium text-primary"
          >
            Discount
          </label>

          <input
            id="discount"
            type="number"
            min="0"
            max="100"
            placeholder="10%"
            {...register("discount", {
              valueAsNumber: true,
            })}
            className="h-10 w-full rounded-md border-0 bg-neutral-100 px-3 text-sm outline-none"
          />

          {errors.discount && (
            <p className="text-xs text-red-500">
              {errors.discount.message}
            </p>
          )}
        </div>

        {/* Discount Type */}
        <div className="space-y-1.5">
          <label
            htmlFor="discountType"
            className="text-xs font-medium text-primary"
          >
            Discount Type
          </label>

          <select
            id="discountType"
            {...register("discountType")}
            className="h-10 w-full rounded-md border-0 bg-neutral-100 px-3 text-sm outline-none"
          >
            <option value="">Select discount type</option>
            <option value="chinese-new-year">
              Chinese New Year Discount
            </option>
            <option value="summer-sale">
              Summer Sale
            </option>
            <option value="black-friday">
              Black Friday
            </option>
            <option value="new-year">
              New Year Discount
            </option>
          </select>

          {errors.discountType && (
            <p className="text-xs text-red-500">
              {errors.discountType.message}
            </p>
          )}
        </div>

      </div>
    </section>
  );
}