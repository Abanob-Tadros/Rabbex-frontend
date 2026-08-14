"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Plus, X } from "lucide-react";
import Image from "next/image";

import { ProductFormData } from "./validation/schema";
import ValidationErrorUi from "@/components/ValidationErrorUi";

export default function UploadImages() {
  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  const [previews, setPreviews] = useState<string[]>([]);

  const handleImagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);

    if (!files.length) return;

    // Get current images
    const currentImages = getValues("images") ?? [];

    // Add new images
    const allImages = [...currentImages, ...files];

    // maximum 5 images
    const limitedImages = allImages.slice(0, 5);

    // Store files in React Hook Form
    setValue("images", limitedImages, {
      shouldValidate: true,
      shouldDirty: true,
    });

    // Create previews for the new images
    const newUrls = files
      .slice(0, 5 - currentImages.length)
      .map((file) => URL.createObjectURL(file));

    setPreviews((prev) => [...prev, ...newUrls]);

    // reset input so same file can be selected again
    event.target.value = "";
  };

  const removeImage = (index: number) => {
    const currentImages = [...(getValues("images") ?? [])];

    // Remove file
    currentImages.splice(index, 1);

    setValue("images", currentImages, {
      shouldValidate: true,
      shouldDirty: true,
    });

    // Remove preview URL
    URL.revokeObjectURL(previews[index]);

    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <section className="rounded-lg border border-border bg-card p-5 shadow-sm">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-base font-semibold tracking-tight text-foreground">
          Upload Images
        </h2>

        <p className="mt-1 text-xs text-muted-foreground">
          Add up to 5 product images
        </p>
      </div>

      {/* Main image */}
      <div
        className="
          relative
          flex h-60
          items-center justify-center
          overflow-hidden
          rounded-lg
          border border-border
          bg-background
        "
      >
        {previews.length > 0 ? (
          <Image
            src={previews[0]}
            alt="Product preview"
            fill
            unoptimized
            className="object-contain"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-full
                border border-border
                bg-surface
              "
            >
              <Plus size={18} className="text-muted-foreground" />
            </div>

            <span className="text-sm font-medium text-foreground">
              Upload product image
            </span>

            <span className="text-xs text-muted-foreground">
              Add product photos below
            </span>
          </div>
        )}
      </div>

      {/* Thumbnails */}
      <div className="mt-3 flex flex-wrap gap-2.5">
        {previews.map((preview, index) => (
          <div
            key={preview}
            className="
              group
              relative
              h-14 w-14
              overflow-hidden
              rounded-md
              border border-border
              bg-surface
              shadow-sm
            "
          >
            <Image
              src={preview}
              alt={`Product ${index + 1}`}
              fill
              unoptimized
              className="object-cover"
            />

            {/* Remove */}
            <button
              type="button"
              onClick={() => removeImage(index)}
              className="
                absolute
                right-1
                top-1
                z-10
                flex
                h-5 w-5
                items-center justify-center
                rounded-full
                bg-foreground/80
                text-background
                opacity-0
                transition-opacity
                duration-200
                hover:bg-destructive
                group-hover:opacity-100
                focus:opacity-100
              "
            >
              <X size={11} />
            </button>
          </div>
        ))}

        {/* Add image */}
        {previews.length < 5 && (
          <label
            className="
              flex
              h-14 w-14
              cursor-pointer
              items-center justify-center
              rounded-md
              border
              border-dashed
              border-input
              bg-surface
              transition-all
              duration-200
              hover:border-accent
              hover:bg-background-hover
            "
          >
            <Plus
              size={19}
              className="text-muted-foreground transition-colors hover:text-accent"
            />

            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              {...register("images")}
              onChange={handleImagesChange}
            />
          </label>
        )}
      </div>

      {/* Error */}
      <ValidationErrorUi message={errors.images?.message} />
    </section>
  );
}
