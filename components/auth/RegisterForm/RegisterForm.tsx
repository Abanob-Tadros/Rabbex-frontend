"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema, type RegisterFormData } from "./schema";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    console.log("Form Data:", data);

    // API request
    // await fetch("/api/register", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    // });

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md space-y-4">
      {/* Name */}
      <div>
        <label htmlFor="name">الاسم</label>

        <input
          id="name"
          type="text"
          {...register("name")}
          placeholder="أدخل اسمك"
          className="w-full rounded border p-2"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email">البريد الإلكتروني</label>

        <input
          id="email"
          type="email"
          {...register("email")}
          placeholder="example@email.com"
          className="w-full rounded border p-2"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password">كلمة المرور</label>

        <input
          id="password"
          type="password"
          {...register("password")}
          placeholder="********"
          className="w-full rounded border p-2"
        />

        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <label htmlFor="confirmPassword">تأكيد كلمة المرور</label>

        <input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
          placeholder="********"
          className="w-full rounded border p-2"
        />

        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {isSubmitting ? "جاري التسجيل..." : "تسجيل"}
      </button>
    </form>
  );
}
