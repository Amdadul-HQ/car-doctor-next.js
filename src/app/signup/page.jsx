"use client";
import SocialSignIn from "@/components/shared/SocialSignIn";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa6";

const SignuPage = () => {
  const handleSignup = async (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const res = await fetch("http://localhost:3000/signup/api", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    if (res.status === 200) {
      e.target.reset();
    }
  };
  return (
    <section className="flex container mx-auto items-center my-32">
      <div className="w-1/2">
        <Image
          src="/assets/images/login/login.svg"
          alt=""
          width={540}
          height={540}
        />
      </div>
      <div className="w-1/2 px-20 border-2 rounded-md border-white py-10">
        <form onSubmit={handleSignup}>
          <h1 className="text-4xl text-center text-[#444] font-semibold">
            Sign Up
          </h1>
          <div className="mt-4 space-y-2">
            <label className="text-[#444] text-lg font-semibold" htmlFor="name">
              Name
            </label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Enter Name here"
              id="name"
              className="input py-4 input-bordered w-full"
              required
            />
          </div>
          <div className="mt-4 space-y-2">
            <label
              className="text-[#444] text-lg font-semibold"
              htmlFor="email"
            >
              Email
            </label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Enter Email here"
              id="email"
              className="input py-4 input-bordered w-full"
              required
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
              type="password"
              name="password"
              placeholder="Enter password here"
              id="password"
              className="input py-4 input-bordered w-full"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-transparent btn btn-primary btn-outline font-semibold transition-all duration-300 mt-5 rounded-lg text-xl"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div>
          <p className="text-lg font-medium text-center mt-6">
            Or Sign In With
          </p>
          <SocialSignIn />
          <div className="text-center mt-4">
            <Link
              href={"/login"}
              className="text-[#444] text-lg font-normal text-center"
            >
              Already have an account?{" "}
              <span className="text-orange font-medium">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignuPage;
