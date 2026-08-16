"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/lib/supabase";

const loginSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email"),

  password: z
    .string()
    .min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    const { data, error } =
      await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }
    console.log(data);
    alert("Logged in successfully!");
  };

  return (
    <main>
      <h1>Login</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
          />

          {errors.email && (
            <p>{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />

          {errors.password && (
            <p>{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Logging in..."
            : "Login"}
        </button>
      </form>
    </main>
  );
}