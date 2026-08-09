import { useFormContext } from "react-hook-form";
import { ProductFormData } from "./validation/schema";

export default function BasicInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  return (
    <div className="flex flex-col">
      {/* Name Product */}
      <label htmlFor="name" className="ml-1">
        Name Product
      </label>

      <input
        id="name"
        className="bg-[#3a3a3a] p-2 rounded-md my-2 focus:outline-none"
        type="text"
        {...register("name")}
        placeholder="Name"
      />

      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      {/* Description */}
      <label htmlFor="description" className="ml-1">
        Description Product
      </label>

      <textarea
        id="description"
        {...register("description")}
        placeholder="Write your description..."
        rows={5}
        className="
          w-full
          bg-[#3a3a3a]
          rounded-md
          p-3
          my-2
          resize-none
          focus:outline-none
        "
      />

      {errors.description && (
        <p className="text-red-500">{errors.description.message}</p>
      )}
    </div>
  );
}
