"use client";

import { useFormContext } from "react-hook-form";

import { ProductFormData } from "./validation/schema";
import ValidationErrorUi from "@/components/ValidationErrorUi";

export default function Category() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  const categories = [
    {
      value: "jacket",
      label: "Jacket",
    },
    {
      value: "t-shirt",
      label: "T-Shirt",
    },
    {
      value: "hoodie",
      label: "Hoodie",
    },
    {
      value: "pants",
      label: "Pants",
    },
  ];

  const handleAddCategory = () => {
    // هنا بعدين تقدر تفتح Modal
    // لإضافة Category جديدة

    console.log("Add Category");
  };

  return (
    <section className="rounded-lg border border-border bg-card p-5 shadow-sm">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-base font-semibold tracking-tight text-foreground">
          Category
        </h2>

        <p className="mt-1 text-xs text-muted-foreground">
          Select the product category
        </p>
      </div>

      {/* Label */}
      <label
        htmlFor="category"
        className="mb-1.5 block text-xs font-medium text-foreground"
      >
        Product Category
      </label>

      {/* Select */}
      <select
        id="category"
        {...register("category")}
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
        <option value="">
          Select category
        </option>

        {categories.map((category) => (
          <option
            key={category.value}
            value={category.value}
          >
            {category.label}
          </option>
        ))}
      </select>

      {/* Error */}
       <ValidationErrorUi message={errors.category?.message} />
      {/* Add Category */}
      <button
        type="button"
        onClick={handleAddCategory}
        className="
          mt-4
          inline-flex
          h-9
          items-center
          justify-center
          rounded-md
          border
          border-accent
          bg-accent
          px-4
          text-xs
          font-semibold
          text-accent-foreground
          transition-all
          duration-200

          hover:bg-accent-hover
          focus:outline-none
          focus:ring-2
          focus:ring-accent/30
          focus:ring-offset-2
          focus:ring-offset-card
        "
      >
        Add Category
      </button>
    </section>
  );
}