import { useFormContext } from "react-hook-form";
import { ProductFormData } from "./validation/schema";
import ValidationErrorUi from "@/components/ValidationErrorUi";

export default function BasicInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  return (
    <div className="space-y-5">
      {/* Name Product */}
      <div className="space-y-1.5">
        <label
          htmlFor="name"
          className="block text-xs font-medium text-foreground"
        >
          Name Product
        </label>

        <input
          id="name"
          type="text"
          {...register("name")}
          placeholder="Name"
          className="
            h-11
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

         <ValidationErrorUi message={errors.name?.message} />
      </div>

      {/* Description */}
      <div className="space-y-1.5">
        <label
          htmlFor="description"
          className="block text-xs font-medium text-foreground"
        >
          Description Product
        </label>

        <textarea
          id="description"
          {...register("description")}
          placeholder="Write your description..."
          rows={5}
          className="
            w-full
            resize-none
            rounded-md
            border border-input
            bg-surface
            p-3
            text-sm
            leading-6
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

        <ValidationErrorUi message={errors.description?.message} />
     
      </div>
    </div>
  );
}