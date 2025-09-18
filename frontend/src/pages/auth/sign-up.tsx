/* eslint-disable react/no-unescaped-entities */
import { Button } from "../../components/button";
import { Asterisk } from "../../components/icons";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

type SignUpInputs = {
  name: string;
  password: string;
  email: string;
};

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>();

  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  //This function is not yet completed
  const onSubmit: SubmitHandler<SignUpInputs> = (data) => {
    console.log(data);
    const userInfo = "xyz"
    if (!userInfo) return;
    navigate("/");
  };

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Left Section */}
      <div className="bg-background flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-neo flex w-full max-w-md flex-col gap-5 rounded-lg bg-white px-8 py-8 sm:px-12"
        >
          <img src="/Socio-logo.png" alt="logo" className="size-10" />

          <div className="flex flex-col gap-2">
            <h1 className="font-heading text-3xl font-bold text-black sm:text-4xl">
              Sign Up
            </h1>
            <p className="text-sm text-neutral-400">
              Connect with people who get you
            </p>
          </div>

          {/* Name */}
          <div className="relative flex flex-col gap-2">
            <Asterisk className="absolute top-0.5 left-14 size-3" />
            <label htmlFor="name" className="font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              autoComplete="name"
              {...register("name", {
                required: true,
              })}
              className="rounded-md border-2 border-black px-4 py-2"
            />
            {errors.name?.type === "required" && (
              <span className="text-alert text-sm">Username is required</span>
            )}
          </div>

          {/* Email */}
          <div className="relative flex flex-col gap-2">
            <Asterisk className="absolute top-0.5 left-13 size-3" />
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="socio@example.com"
              autoComplete="socio@example.com"
              {...register("email", {
                required: true,
              })}
              className="rounded-md border-2 border-black px-4 py-2"
            />
            {errors.email?.type === "required" && (
              <span className="text-alert text-sm">Username is required</span>
            )}
          </div>

          {/* Password */}
          <div className="relative flex flex-col gap-2">
            <Asterisk className="absolute top-0.5 left-22 size-3" />
            {isPasswordVisible ? (
              <EyeClosed
                className="absolute right-3 bottom-2.5 cursor-pointer"
                onClick={() => setIsPasswordVisible(false)}
              />
            ) : (
              <Eye
                className="absolute right-3 bottom-2.5 cursor-pointer"
                onClick={() => setIsPasswordVisible(true)}
              />
            )}
            <Link
              to="/forgot-password"
              className="absolute top-2 right-0 text-xs text-black hover:underline"
            >
              Forgot your password?
            </Link>
            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              placeholder="Enter password"
              autoComplete="current-password"
              {...register("password", { required: true, minLength: 8 })}
              className="rounded-md border-2 border-black px-4 py-2"
            />
            {errors.password?.type === "required" && (
              <span className="text-alert text-sm">Password is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-alert text-sm">
                Password must be at least 8 characters
              </span>
            )}
          </div>

          {/* Buttons */}
          <Button variant="primary" className="mt-4 px-4 py-2">
            Sign Up
          </Button>

          {/* Sign Up */}
          <div className="mt-2 flex items-center justify-center gap-1 text-sm">
            <span>Already have an account?</span>
            <Link to="/login" className="cursor-pointer underline">
              Login
            </Link>
          </div>
        </form>
      </div>

      {/* Right Section */}
      <div className="hidden h-full items-center justify-center bg-yellow-300 lg:flex">
        <img src="/Socio-logo.png" alt="logo" className="size-20" />
      </div>
    </div>
  );
}

export default SignUp;
