"use client";

import { useState } from "react";
import { Input } from "@heroui/react";
import { Button } from '@heroui/react';
// import { Divider } from "@heroui/divider";
import { Person, At, Lock, Eye, EyeSlash } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client"; // your better-auth client

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await authClient.signUp.email({
        name: form.name,
        email: form.email,
        password: form.password,
      });
      // Redirect handled by better-auth or do it manually:
      // router.push("/dashboard");
    } catch (err) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1117] flex items-center justify-center px-4 ">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-violet-700/10 blur-[120px]" />
      </div>

      <div className="relative w-full max-w-[440px]">
        {/* Logo / wordmark */}
        <div className="mb-8 text-center">
          <span className="inline-block text-2xl font-semibold tracking-tight text-white">
            Hire<span className="text-indigo-400">Loop</span>
          </span>
        </div>

        {/* Card */}
        <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500/30 via-transparent to-violet-500/20">
          <div className="rounded-2xl bg-[#161B27] px-8 py-10">
            <h1 className="text-[1.6rem] font-semibold text-white leading-tight tracking-tight">
              Create your account
            </h1>
            <p className="mt-1.5 text-sm text-slate-400">
              Already have one?{" "}
              <a
                href="/login"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Sign in
              </a>
            </p>

            {/* <Divider className="my-6 bg-white/5" /> */}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name */}
              <Input
                label="Full name"
                placeholder="Jane Doe"
                value={form.name}
                onChange={handleChange("name")}
                autoComplete="name"
                required
                startContent={
                  <Person className="text-slate-500 shrink-0" width={16} height={16} />
                }
                classNames={{
                  label: "text-slate-400 text-xs font-medium",
                  input: "text-white bg-transparent placeholder:text-slate-600",
                  inputWrapper:
                    "bg-white/5 border border-white/10 hover:border-indigo-500/50 focus-within:border-indigo-500 transition-colors rounded-xl h-11",
                }}
              />

              {/* Email */}
              <Input
                label="Email address"
                placeholder="jane@example.com"
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                autoComplete="email"
                required
                startContent={
                  <At className="text-slate-500 shrink-0" width={16} height={16} />
                }
                classNames={{
                  label: "text-slate-400 text-xs font-medium",
                  input: "text-white bg-transparent placeholder:text-slate-600",
                  inputWrapper:
                    "bg-white/5 border border-white/10 hover:border-indigo-500/50 focus-within:border-indigo-500 transition-colors rounded-xl h-11",
                }}
              />

              {/* Password */}
              <Input
                label="Password"
                placeholder="At least 8 characters"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={handleChange("password")}
                autoComplete="new-password"
                required
                minLength={8}
                startContent={
                  <Lock className="text-slate-500 shrink-0" width={16} height={16} />
                }
                endContent={
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="text-slate-500 hover:text-slate-300 transition-colors focus:outline-none"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeSlash width={16} height={16} />
                    ) : (
                      <Eye width={16} height={16} />
                    )}
                  </button>
                }
                classNames={{
                  label: "text-slate-400 text-xs font-medium",
                  input: "text-white bg-transparent placeholder:text-slate-600",
                  inputWrapper:
                    "bg-white/5 border border-white/10 hover:border-indigo-500/50 focus-within:border-indigo-500 transition-colors rounded-xl h-11",
                }}
              />

              {/* Error */}
              {error && (
                <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              {/* Submit */}
              <Button
                type="submit"
                isLoading={isLoading}
                className="mt-1 w-full h-11 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium text-sm transition-colors"
                spinner={
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                }
              >
                {isLoading ? "Creating account…" : "Create account"}
              </Button>
            </form>

            {/* Terms */}
            <p className="mt-5 text-center text-xs text-slate-600 leading-relaxed">
              By signing up you agree to our{" "}
              <a href="/terms" className="text-slate-400 hover:text-white transition-colors underline underline-offset-2">
                Terms
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-slate-400 hover:text-white transition-colors underline underline-offset-2">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}