import { useFormContext } from "react-hook-form";
import { ProductFormData } from "./validation/schema";

export default function PricingAndStock() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  return (
    <section >

      {/* Title */}
      <h2 className="mb-4 text-lg font-semibold tesxt-primary">
        Pricing And Stock
      </h2>

      {/* Fields */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Base Pricing */}
        <div className="space-y-1.5">
          <label htmlFor="price" className="text-xs font-medium tesxt-primary">
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
              border-0
              bg-neutral-100
              px-3
              text-sm
              tesxt-primary
              outline-none
              transition
              placeholder:text-neutral-500
              focus:bg-neutral-200
              focus:ring-2
              focus:ring-neutral-300
            "
          />

          {errors.price && (
            <p className="text-xs text-red-500">{errors.price.message}</p>
          )}
        </div>

        {/* Stock */}
        <div className="space-y-1.5">
          <label htmlFor="stock" className="text-xs font-medium tesxt-primary">
            Stock
          </label>

          <input
            id="stock"
            type="number"
            placeholder="77"
            {...register("stock", {
              valueAsNumber: true,
            })}
            className="
              h-10
              w-full
              rounded-md
              border-0
              bg-neutral-100
              px-3
              text-sm
              text-neutral-800
              outline-none
              transition
              placeholder:text-neutral-500
              focus:bg-neutral-200
              focus:ring-2
              focus:ring-neutral-300
            "
          />

          {errors.stock && (
            <p className="text-xs text-red-500">{errors.stock.message}</p>
          )}
        </div>

        {/* Discount */}
        <div className="space-y-1.5">
          <label
            htmlFor="discount"
            className="text-xs font-medium tesxt-primary"
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
            className="
              h-10
              w-full
              rounded-md
              border-0
              bg-neutral-100
              px-3
              text-sm
              text-neutral-800
              outline-none
              transition
              placeholder:text-neutral-500
              focus:bg-neutral-200
              focus:ring-2
              focus:ring-neutral-300
            "
          />

          {errors.discount && (
            <p className="text-xs text-red-500">{errors.discount.message}</p>
          )}
        </div>

        {/* Discount Type */}
        <div className="space-y-1.5">
          <label
            htmlFor="discountType"
            className="text-xs font-medium tesxt-primary"
          >
            Discount Type
          </label>

          <select
            id="discountType"
            {...register("discountType")}
            className="
              h-10
              w-full
              appearance-none
              rounded-md
              border-0
              bg-neutral-100
              px-3
              text-sm
              text-neutral-800
              outline-none
              transition
              focus:bg-neutral-200
              focus:ring-2
              focus:ring-neutral-300
            "
          >
            <option value="">Select discount type</option>

            <option value="chinese-new-year">Chinese New Year Discount</option>

            <option value="summer-sale">Summer Sale</option>

            <option value="black-friday">Black Friday</option>

            <option value="new-year">New Year Discount</option>
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
