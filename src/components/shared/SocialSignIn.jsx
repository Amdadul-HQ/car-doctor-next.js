"use client"
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaFacebookF, FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa6";

const SocialSignIn = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
  
    const path = searchParams.get('redirect')
    const session = useSession()
      const handleSocialLogin = (provider) => {
          const resp = signIn(provider, {
            redirect : true,
            callbackUrl : path ? path : '/'
          })
      }
  return (
    <div className="flex gap-x-6 mt-6 justify-center">
      <button onClick={()=>handleSocialLogin('github')} className="p-6 rounded-full border bg-[#F5F5F8] text-blue-500">
        <FaGithub />
      </button>
      <button  className="p-6 rounded-full border bg-[#F5F5F8] text-blue-500">
        <FaLinkedinIn />
      </button>
      <button onClick={()=>handleSocialLogin('google')} className="p-6 rounded-full border bg-[#F5F5F8] text-blue-500">
        <FaGoogle />
      </button>
    </div>
  );
};

export default SocialSignIn;
