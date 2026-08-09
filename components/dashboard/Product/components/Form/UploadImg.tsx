"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Plus, X } from "lucide-react";
import Image from "next/image";

import { ProductFormData } from "./validation/schema";

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
    <section className="rounded-2xl bg-white p-4">
      {/* Title */}
      <h2 className="mb-3 text-lg font-semibold text-primary">
        Upload Img
      </h2>

      {/* Main image */}
      <div className="relative flex h-55 items-center justify-center overflow-hidden rounded-lg bg-input">
        {previews.length > 0 ? (
          <Image
            src={previews[0]}
            alt="Product preview"
            fill
            unoptimized
            className="object-contain"
          />
        ) : (
          <span className="text-sm text-p">Upload product image</span>
        )}
      </div>

      {/* Thumbnails */}
      <div className="mt-3 flex gap-2">
        {previews.map((preview, index) => (
          <div
            key={preview}
            className="relative h-12 w-12 overflow-hidden rounded-lg border border-border"
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
                h-4
                w-4
                items-center
                justify-center
                rounded-full
                bg-black/60
                text-white
              "
            >
              <X size={10} />
            </button>
          </div>
        ))}

        {/* Add image */}
        {previews.length < 5 && (
          <label
            className="
              flex
              h-12
              w-12
              cursor-pointer
              items-center
              justify-center
              rounded-lg
              border
              border-dashed
              border-neutral-300
              bg-neutral-50
            "
          >
            <Plus size={18} className="text-green-400" />

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
      {errors.images && (
        <p className="mt-2 text-xs text-red-500">{errors.images.message}</p>
      )}
    </section>
  );
}
