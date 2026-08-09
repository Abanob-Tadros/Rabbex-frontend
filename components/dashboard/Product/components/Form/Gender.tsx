import { useFormContext } from "react-hook-form";
import { ProductFormData } from "./validation/schema";

export default function Genders() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  const genders = [
    { label: "Men", value: "male" },
    { label: "Woman", value: "female" },
    { label: "Unisex", value: "unisex" },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-0.5">
        {/* Title */}
        <label className="text-lg font-medium">Gender</label>

        {/* Description */}
        <span className="text-[14px] text-gray-400 mb-2">
          Pick Available Gender
        </span>
      </div>
     
      {/* Options */}
      <div className="mt-3 flex items-center gap-6">
        {genders.map((gender) => (
          <label
            key={gender.value}
            className="flex cursor-pointer items-center gap-2"
          >
            <input
              type="radio"
              value={gender.value}
              {...register("gender")}
              className="
                h-4
                w-4
                accent-green-500
                cursor-pointer
              "
            />

            <span className="text-sm text-white">{gender.label}</span>
          </label>
        ))}
      </div>

      {/* Error */}
      {errors.gender && (
        <p className="mt-2 text-sm text-red-500">{errors.gender.message}</p>
      )}
    </div>
  );
}
