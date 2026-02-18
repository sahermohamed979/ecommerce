"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  forgetPasswordRequest,
  verifyResetCodeRequest,
  resetPasswordRequest,
} from "../servers/forget.actions";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faKey,
  faLock,
  faArrowLeft,
  faShieldHalved,
  faCheck,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

export default function ForgetPasswordScreen() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register: registerEmail,
    handleSubmit: handleSubmitEmail,
    formState: { errors: errorsEmail },
  } = useForm({
    defaultValues: { email: "" },
    mode: "onChange",
  });

  const { register: registerCode, handleSubmit: handleSubmitCode } = useForm({
    defaultValues: { resetCode: "" },
    mode: "onChange",
  });

  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: errorsPassword },
  } = useForm({
    defaultValues: { newPassword: "" },
    mode: "onChange",
  });

  const onEmailSubmit = async (data: { email: string }) => {
    setIsLoading(true);
    try {
      const response = await forgetPasswordRequest(data);
      if (response.statusMsg === "success" || response.status === "Success") {
        toast.success(response.message || "Reset code sent to your email");
        setEmail(data.email);
        setStep(2);
      }
    } catch (error: unknown) {
      const err = error as any;
      toast.error(err.response?.data?.message || "Failed to send reset code");
    } finally {
      setIsLoading(false);
    }
  };

  const onCodeSubmit = async (data: { resetCode: string }) => {
    setIsLoading(true);
    try {
      const response = await verifyResetCodeRequest(data);
      if (response.status === "Success") {
        toast.success("Code verified successfully");
        setStep(3);
      }
    } catch (error: unknown) {
      const err = error as any;
      toast.error(err.response?.data?.message || "Invalid reset code");
    } finally {
      setIsLoading(false);
    }
  };

  const onPasswordReset = async (data: { newPassword: string }) => {
    setIsLoading(true);
    try {
      const response = await resetPasswordRequest({
        email,
        newPassword: data.newPassword,
      });
      if (response.token) {
        toast.success("Password reset successfully");
        router.push("/login");
      }
    } catch (error: unknown) {
      const err = error as any;
      toast.error(err.response?.data?.message || "Failed to reset password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container py-16 mx-auto px-4" id="forgot-password-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Left Side Decor - Hidden on Mobile */}
        <div className="hidden lg:block">
          <div className="text-center space-y-6">
            <div className="w-full h-96 bg-linear-to-br from-primary-50 via-green-50 to-emerald-50 rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-primary-100/50" />
              <div className="absolute bottom-12 right-10 w-32 h-32 rounded-full bg-green-100/50" />
              <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-emerald-100/50" />
              <div className="relative flex flex-col items-center gap-6 z-10">
                <div className="w-28 h-28 rounded-3xl bg-white shadow-xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-20 h-20 rounded-2xl bg-primary-100 flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="text-primary-600 text-4xl"
                    />
                  </div>
                </div>
                <div className="absolute -left-16 top-4 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center -rotate-12">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-primary-500 text-xl"
                  />
                </div>
                <div className="absolute -right-16 top-8 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center rotate-12">
                  <FontAwesomeIcon
                    icon={faShieldHalved}
                    className="text-green-500 text-xl"
                  />
                </div>
                <div className="flex gap-3">
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${step >= 1 ? "bg-primary-600 scale-110" : "bg-gray-300"}`}
                  />
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${step >= 2 ? "bg-primary-600 scale-110" : "bg-gray-300"}`}
                  />
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${step >= 3 ? "bg-primary-600 scale-110" : "bg-gray-300"}`}
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
                {step === 1 && "Reset Your Password"}
                {step === 2 && "Verification Code"}
                {step === 3 && "Secure New Password"}
              </h2>
              <p className="text-lg text-gray-600">
                {step === 1 &&
                  "Don't worry, it happens to the best of us. We'll help you get back into your account in no time."}
                {step === 2 &&
                  "Please enter the 6-digit code we just sent to your email to verify your identity."}
                {step === 3 &&
                  "Almost there! Create a strong password to protect your account."}
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div
                  className={`flex items-center ${step >= 1 ? "text-primary-600 font-semibold" : ""}`}
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  Email
                </div>
                <div
                  className={`flex items-center ${step >= 2 ? "text-primary-600 font-semibold" : ""}`}
                >
                  <FontAwesomeIcon icon={faKey} className="mr-2" />
                  Verify
                </div>
                <div
                  className={`flex items-center ${step >= 3 ? "text-primary-600 font-semibold" : ""}`}
                >
                  <FontAwesomeIcon icon={faLock} className="mr-2" />
                  Secure
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Forms */}
        <div className="w-full">
          {step === 1 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-primary-600">
                    Fresh<span className="text-gray-800">Cart</span>
                  </span>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  Forgot Password?
                </h1>
                <p className="text-gray-600">
                  No worries, we&apos;ll send you a reset code
                </p>
              </div>

              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-primary-600 text-white ring-4 ring-primary-100">
                    <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
                  </div>
                  <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200" />
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-gray-100 text-gray-400">
                    <FontAwesomeIcon icon={faKey} className="text-xs" />
                  </div>
                  <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200" />
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-gray-100 text-gray-400">
                    <FontAwesomeIcon icon={faLock} className="text-xs" />
                  </div>
                </div>
              </div>

              <form
                className="space-y-6"
                onSubmit={handleSubmitEmail(onEmailSubmit)}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      className={`w-full px-4 py-3 pl-12 border-2 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all ${errorsEmail.email ? "border-red-500" : "border-gray-200"}`}
                      placeholder="Enter your email address"
                      type="email"
                      {...registerEmail("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </div>
                  {errorsEmail.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errorsEmail.email.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary-600 text-white py-3 px-4 rounded-xl hover:bg-primary-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <FontAwesomeIcon icon={faSpinner} spin />
                  ) : (
                    "Send Reset Code"
                  )}
                </button>

                <div className="text-center">
                  <Link
                    className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors"
                    href="/login"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
                    Back to Sign In
                  </Link>
                </div>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-primary-600">
                    Fresh<span className="text-gray-800">Cart</span>
                  </span>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  Check Your Email
                </h1>
                <p className="text-gray-600">
                  Enter the 6-digit code sent to {email}
                </p>
              </div>

              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-primary-600 text-white">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-primary-600" />
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-primary-600 text-white ring-4 ring-primary-100">
                    <FontAwesomeIcon icon={faKey} className="text-xs" />
                  </div>
                  <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200" />
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-gray-100 text-gray-400">
                    <FontAwesomeIcon icon={faLock} className="text-xs" />
                  </div>
                </div>
              </div>

              <form
                className="space-y-6"
                onSubmit={handleSubmitCode(onCodeSubmit)}
              >
                <div>
                  <label
                    htmlFor="resetCode"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Verification Code
                  </label>
                  <div className="relative">
                    <input
                      id="resetCode"
                      maxLength={6}
                      className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all text-center text-2xl tracking-[0.5em] font-mono"
                      placeholder="••••••"
                      type="text"
                      {...registerCode("resetCode", {
                        required: true,
                        minLength: 6,
                      })}
                    />
                    <FontAwesomeIcon
                      icon={faShieldHalved}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    Didn&apos;t receive the code?{" "}
                    <button
                      type="button"
                      onClick={() => onEmailSubmit({ email })}
                      className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                    >
                      Resend Code
                    </button>
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary-600 text-white py-3 px-4 rounded-xl hover:bg-primary-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <FontAwesomeIcon icon={faSpinner} spin />
                  ) : (
                    "Verify Code"
                  )}
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary-600 font-medium transition-colors"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
                    Change email address
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-primary-600">
                    Fresh<span className="text-gray-800">Cart</span>
                  </span>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  New Password
                </h1>
                <p className="text-gray-600">
                  Set a secure password for your account
                </p>
              </div>

              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-primary-600 text-white">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-primary-600" />
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-primary-600 text-white">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-primary-600" />
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-primary-600 text-white ring-4 ring-primary-100">
                    <FontAwesomeIcon icon={faLock} className="text-xs" />
                  </div>
                </div>
              </div>

              <form
                className="space-y-6"
                onSubmit={handleSubmitPassword(onPasswordReset)}
              >
                <div>
                  <label
                    htmlFor="newPassword"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      id="newPassword"
                      className={`w-full px-4 py-3 pl-12 border-2 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all ${errorsPassword.newPassword ? "border-red-500" : "border-gray-200"}`}
                      placeholder="••••••••"
                      type="password"
                      {...registerPassword("newPassword", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Minimum 6 characters",
                        },
                      })}
                    />
                    <FontAwesomeIcon
                      icon={faLock}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </div>
                  {errorsPassword.newPassword && (
                    <p className="text-red-500 text-xs mt-1">
                      {errorsPassword.newPassword.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary-600 text-white py-3 px-4 rounded-xl hover:bg-primary-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <FontAwesomeIcon icon={faSpinner} spin />
                  ) : (
                    "Reset Password"
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
