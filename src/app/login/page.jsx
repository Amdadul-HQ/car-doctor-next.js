"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import SocialSignIn from "@/components/shared/SocialSignIn";

const LoginPage = () => {
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res.status === 200) {
      router.push("/");
    }
  };
  return (
    <section className="flex max-w-screen-xl mx-auto items-center my-32">
      <div className="w-1/2">
        <Image
          src="/assets/images/login/login.svg"
          alt=""
          width={540}
          height={540}
        />
      </div>
      <div className="w-1/2 px-20 border-2 border-white rounded-md py-10">
        <form onSubmit={handleLogin}>
          <h1 className="text-4xl text-center text-[#444] font-semibold">
            Log In
          </h1>
          <div className="mt-4 space-y-2">
            <label
              className="text-[#444] text-lg font-semibold"
              htmlFor="email"
            >
              Email
            </label>
            <br />
            <input
              name="email"
              type="email"
              placeholder="Enter Email here"
              id="email"
              className="input py-4 input-bordered w-full"
            />
          </div>
          <div className="mt-4 space-y-2">
            <label
              className="text-[#444] text-lg font-semibold"
              htmlFor="password"
            >
              Password
            </label>
            <br />
            <input
              name="password"
              type="password"
              placeholder="Enter password here"
              id="password"
              className="input py-4 input-bordered w-full"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-transparent font-semibold btn btn-outline btn-primary hover:text-white hover:border-white transition-all duration-300  mt-5 rounded-lg text-xl"
            >
              Log in
            </button>
          </div>
        </form>
        <div>
          <p className="text-lg font-medium text-center mt-6">
            Or Sign In With
          </p>
          <SocialSignIn />
          <div className="text-center mt-4">
            <Link href="/signup" className=" text-lg font-normal text-center">
              Have an account?{" "}
              <span className="text-orange font-medium">Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
