import { useFormContext } from "react-hook-form";
import { ProductFormData } from "./validation/schema";
import ValidationErrorUi from "@/components/ValidationErrorUi";

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
    <section className="rounded-lg border border-border bg-card p-5 shadow-sm">
      {/* Header */}
      <div className="mb-5">
        <label className="block text-base font-semibold tracking-tight text-foreground">
          Gender
        </label>

        <span className="mt-1 block text-xs text-muted-foreground">
          Pick Available Gender
        </span>
      </div>

      {/* Options */}
      <div className="flex flex-wrap gap-3">
        {genders.map((gender) => (
          <label
            key={gender.value}
            className="
              flex cursor-pointer items-center gap-2.5
              rounded-md
              border border-input
              bg-surface
              px-4 py-2.5
              transition-all
              duration-200
              hover:border-accent/50
              hover:bg-background-hover
            "
          >
            <input
              type="radio"
              value={gender.value}
              {...register("gender")}
              className="
                h-4 w-4
                cursor-pointer
                accent-accent
              "
            />

            <span className="text-sm font-medium text-foreground">
              {gender.label}
            </span>
          </label>
        ))}
      </div>

      {/* Error */}
       <ValidationErrorUi message={errors.gender?.message} />
    </section>
  );
}