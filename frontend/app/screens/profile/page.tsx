"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Navbar from "@/app/components/Navbar";

function Profile() {
  const [email, setEmail] = useState("");
  const [postsPosted, setPostsPosted] = useState("");
  const session = useSession();

  return (
    <div className="flex flex-col items-center w-screen">
      <Navbar />
      <div className="mt-20 bg-creamy base-text rounded-xl p-8 w-1/3 h-1/2 flex flex-col justify-center items-center">
        <h1 className="text-2xl base-text font-bold border-b-2 base-border mb-4">
          Account
        </h1>
        <div className="mt-4">
          <img
            className="circle"
            src="/assets/userprofile.png"
            style={{ borderRadius: "50%", width: "100px", height: "100px" }}
            alt="User Profile"
          />
        </div>
        <div className="space-y-6 w-full mt-4">
          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-lg font-bold leading-6 base-text"
            >
              Email
            </label>
            <div className="mt-2 input input-bordered bg-creamy base-border border-2 w-full">
                {JSON.stringify(session?.data?.user?.email)}</div>
          </div>
          <div style={{ paddingTop: "2px" }}></div>
          <div className="w-full">
            <label
              htmlFor="postsPosted"
              className="block text-lg font-bold leading-6 base-text"
            >
              Posts Posted
            </label>
            <div className="mt-2 input input-bordered bg-creamy base-border border-2 w-full">
            3
            </div>
            <div style={{ paddingTop: "60px" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
