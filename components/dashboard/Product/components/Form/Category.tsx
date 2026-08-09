"use client";

import { useFormContext } from "react-hook-form";

import { ProductFormData } from "./validation/schema";

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
    <section className="rounded-2xl bg-white p-4">
      {/* Title */}
      <h2 className="mb-3 text-sm font-semibold text-neutral-900">
        Category
      </h2>

      {/* Label */}
      <label
        htmlFor="category"
        className="mb-1.5 block text-xs font-medium text-neutral-800"
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
          border-0
          bg-neutral-100
          px-3
          text-sm
          text-neutral-700
          outline-none
          transition
          focus:bg-neutral-200
          focus:ring-2
          focus:ring-neutral-300
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
      {errors.category && (
        <p className="mt-1 text-xs text-red-500">
          {errors.category.message}
        </p>
      )}

      {/* Add Category */}
      <button
        type="button"
        onClick={handleAddCategory}
        className="
          mt-3
          rounded-full
          bg-green-300
          px-4
          py-2
          text-xs
          font-medium
          text-neutral-900
          transition
          hover:bg-green-400
        "
      >
        Add Category
      </button>
    </section>
  );
}