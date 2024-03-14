"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";

function LogoutButton() {
 const session = useSession();
 return (
  <div>
   {" "}
   {/* <div className="text-white">{JSON.stringify(session)}</div> */}
   {!session ? (
    <button className="text-white" onClick={() => signOut()}>
     Logout
    </button>
   ) : (
    <div></div>
   )}
  </div>
 );
}

export default LogoutButton;
