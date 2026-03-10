"use client";
import Link from "next/link";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import {
  SignupFormSchema,
  SignupFormValues,
  passwordValidationRules,
} from "../../schemas/Signup.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import signupAction from "../../servers/signup.actions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faUser } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";

function calculatePasswordStrength(password: string) {
  if (!password) return { score: 0, label: "Weak", color: "bg-red-500" };

  const checks = {
    minLength: passwordValidationRules.minLength.safeParse(password).success,
    hasLowercase: passwordValidationRules.hasLowercase.safeParse(password).success,
    hasUppercase: passwordValidationRules.hasUppercase.safeParse(password).success,
    hasNumber: passwordValidationRules.hasNumber.safeParse(password).success,
    hasSpecial: passwordValidationRules.hasSpecial.safeParse(password).success,
  };

  const score = Object.values(checks).filter(Boolean).length;

  if (score <= 2) return { score, label: "Weak", color: "bg-red-500" };
  if (score <= 3) return { score, label: "Medium", color: "bg-yellow-500" };
  if (score <= 4) return { score, label: "Good", color: "bg-blue-500" };
  return { score, label: "Strong", color: "bg-green-500" };
}

export default function SignupForm() {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    setError,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      terms: false,
    },
    mode: "onBlur",
    resolver: zodResolver(SignupFormSchema),
    reValidateMode: "onChange",
  });

  const password = useWatch({ control, name: "password" });
  const passwordStrength = useMemo(
    () => calculatePasswordStrength(password),
    [password],
  );
  const strengthPercentage = Math.round((passwordStrength.score / 5) * 100);

  const onSubmit: SubmitHandler<SignupFormValues> = async (values) => {
    try {
      const response = await signupAction(values);
      if (response?.success) {
        toast.success(response.message);
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        if (response?.errors) {
          Object.keys(response.errors).forEach((key) => {
            setError(key as keyof SignupFormValues, {
              message: response.errors[key] as string,
            });
          });
        }
      }
    } catch (error) {
      toast.error("Signup failed. Please try again." + error);
    }
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg px-6 py-10">
        <h2 className="text-center text-3xl font-semibold mb-2">
          Create Your Account
        </h2>
        <p className="text-center">Start your fresh journey with us today</p>
        <div className="register-options flex gap-2 *:grow my-10">
          <button
            type="button"
            className="btn bg-transparent border border-gray-300 hover:bg-gray-100 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Sign up with Google"
          >
            <svg
              data-prefix="fab"
              data-icon="google"
              className="svg-inline--fa fa-google me-2 text-red-600"
              role="img"
              viewBox="0 0 512 512"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M500 261.8C500 403.3 403.1 504 260 504 122.8 504 12 393.2 12 256S122.8 8 260 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9c-88.3-85.2-252.5-21.2-252.5 118.2 0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9l-140.8 0 0-85.3 236.1 0c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            <span>Google</span>
          </button>
          <button
            type="button"
            className="btn bg-transparent border border-gray-300 hover:bg-gray-100 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Sign up with Facebook"
          >
            <svg
              data-prefix="fab"
              data-icon="facebook"
              className="svg-inline--fa fa-facebook me-2 text-blue-600"
              role="img"
              viewBox="0 0 512 512"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z"
              ></path>
            </svg>
            <span>Facebook</span>
          </button>
        </div>
        <div
          className="divider relative w-full h-0.5 bg-gray-300/30 my-4 flex items-center before:content-['or'] before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:bg-white before:px-4"
          aria-hidden="true"
        >
          <span className="sr-only">or</span>
        </div>
        <form className="space-y-7" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name*</label>
            <input
              id="name"
              className="form-control"
              placeholder="Ali"
              type="text"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email*</label>
            <input
              id="email"
              className="form-control"
              placeholder="ali@example.com"
              type="text"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password*</label>
              <input
                id="password"
                className="form-control"
                placeholder="create a strong password"
                type="password"
                {...register("password")}
              />{" "}
              {errors.password && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.password.message}
                </p>
              )}
              <div className="password-requirements">
                <div className="flex items-center gap-2">
                  <div
                    className="bar grow h-1 bg-gray-200 rounded-md overflow-hidden"
                    role="progressbar"
                    aria-valuenow={strengthPercentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`Password strength: ${passwordStrength.label}`}
                  >
                    <div
                      className={`progress ${passwordStrength.color} h-full transition-all duration-300 ease-out`}
                      style={{ width: `${strengthPercentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium min-w-12.5">
                    {passwordStrength.label}
                  </span>
                </div>
              </div>
              <p className="text-gray-500 -mt-2 text-xs">
                Must be at least 8 characters with numbers and symbols
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="rePassword">Confirm Password*</label>
            <input
              id="rePassword"
              className="form-control"
              placeholder="confirm your password"
              type="password"
              {...register("rePassword")}
            />
          </div>
          {errors.rePassword && (
            <p className="text-sm text-red-600 mt-1">
              {errors.rePassword.message}
            </p>
          )}
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Phone Number*</label>
            <input
              id="phone"
              className="form-control"
              placeholder="enter your phone number"
              type="tel"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-sm text-red-600 mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <input
                className="size-4 accent-primary-600"
                type="checkbox"
                {...register("terms")}
              />
              {errors.terms && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.terms.message}
                </p>
              )}
              <label htmlFor="terms" className="ms-2">
                I agree to the{" "}
                <Link
                  className="text-primary-600 hover:underline"
                  href="/terms"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  className="text-primary-600 hover:underline"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>{" "}
                *
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed w-full transition-colors"
          >
            {isSubmitting ? (
              <>
                <FontAwesomeIcon icon={faSpinner} spin className="me-2" />
                <span>Creating My Account ...</span>
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faUser} />
                <span>Create My Account</span>
              </>
            )}
          </button>
        </form>
        <p className="border-t pt-10 border-gray-300/30 my-4 text-center">
          Already have an account?{" "}
          <Link
            className="text-primary-600 hover:underline font-medium"
            href="/login"
          >
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
}
