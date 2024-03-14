"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { auth } from "../../firebase";
import { createUser } from "../../firebase/firestore";
import Image from "next/image";
export default function Signup() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [passwordAgain, setPasswordAgain] = useState("");

 const signup = () => {
  createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    const user = userCredential.user;

    if (user) {
     // Check if user is not null or undefined
     createUser(user.uid, user.email ?? "default-email@example.com");
    } else {
     // Handle the case where user is null
     console.error("User is null");
    }
   })
   .catch((error) => {
    const errorCode = error.code;
    console.error(`Error: ${errorCode}`);
   });
 };

 return (
  <>
   <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col">
     <Image
      src="/assets/logo.png"
      className="self-center"
      width={200}
      height={200}
      alt="logo"
     />
     <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
      WELCOME!
     </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
     <div className="space-y-6">
      <div>
       <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-white"
       >
        Email address
       </label>
       <div className="mt-2">
        <input
         id="email"
         name="email"
         type="email"
         autoComplete="email"
         onChange={(e) => setEmail(e.target.value)}
         required
         className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
        />
       </div>
      </div>

      <div>
       <div className="flex items-center justify-between">
        <label
         htmlFor="password"
         className="block text-sm font-medium leading-6 text-white"
        >
         Password
        </label>
       </div>
       <div className="mt-2">
        <input
         id="password"
         name="password"
         type="password"
         autoComplete="current-password"
         onChange={(e) => setPassword(e.target.value)}
         required
         className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
        />
       </div>
      </div>
      <div>
       <div className="flex items-center justify-between">
        <label
         htmlFor="password"
         className="block text-sm font-medium leading-6 text-white"
        >
         Password Again
        </label>
       </div>
       <div className="mt-2">
        <input
         id="passwordAgain"
         name="passwordAgain"
         type="password"
         autoComplete="current-password"
         onChange={(e) => setPasswordAgain(e.target.value)}
         required
         className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
        />
       </div>
      </div>

      <div>
       <button
        disabled={
         !email || !password || !passwordAgain || password !== passwordAgain
        }
        onClick={() => signup()}
        className="disabled:opacity-40 flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
       >
        Sign Up
       </button>
      </div>
     </div>
    </div>
   </div>
  </>
 );
}
