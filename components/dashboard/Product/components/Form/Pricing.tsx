"use client";

import { useFormContext } from "react-hook-form";
import { ProductFormData } from "./validation/schema";
import ValidationErrorUi from "@/components/ValidationErrorUi";

export default function Pricing() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  return (
    <section className="rounded-lg border border-border bg-card p-5 shadow-sm">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-base font-semibold tracking-tight text-foreground">
          Pricing 
        </h2>

        <p className="mt-1 text-xs text-muted-foreground">
          Set the product pricing and discount details
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Price */}
        <div className="space-y-1.5">
          <label
            htmlFor="price"
            className="text-xs font-medium text-foreground"
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
              transition-all
              duration-200
              placeholder:text-muted-foreground

              hover:border-accent/50

              focus:border-accent
              focus:ring-2
              focus:ring-accent/20
            "
          />

           <ValidationErrorUi message={errors.price?.message} />
        </div>

        {/* Discount */}
        <div className="space-y-1.5">
          <label
            htmlFor="discount"
            className="text-xs font-medium text-foreground"
          >
            Discount
          </label>

          <input
            id="discount"
            type="number"
            min="0"
            max="100"
            placeholder="10%"
            {...register("discount")}
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
              transition-all
              duration-200
              placeholder:text-muted-foreground

              hover:border-accent/50

              focus:border-accent
              focus:ring-2
              focus:ring-accent/20
            "
          />

           <ValidationErrorUi message={errors.discount?.message} />
        </div>

        {/* Discount Type */}
        <div className="space-y-1.5">
          <label
            htmlFor="discountType"
            className="text-xs font-medium text-foreground"
          >
            Discount Type
          </label>

          <select
            id="discountType"
            {...register("discountType")}
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
              transition-all
              duration-200

              hover:border-accent/50

              focus:border-accent
              focus:ring-2
              focus:ring-accent/20
            "
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

           <ValidationErrorUi message={errors.discount?.message} />
        </div>
      </div>
    </section>
  );
}