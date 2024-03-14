"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
const CATEGORIES = [
 "Coding",
 "General",
 "Health",
 "Relationship",
 "Work",
 "School",
 "Family",
];

function CreatePost() {
 const [category, setCategory] = useState("");
 const [title, setTitle] = useState("");
 const [post, setPost] = useState("");
 const [isPosting, setIsPosting] = useState(false);

 const session = useSession();

 const createPost = async () => {
  try {
   setIsPosting(true);
   const postData = {
    category: CATEGORIES.indexOf(category),
    title: title,
    content: post,
    user: JSON.stringify(session),
   };

   const response = await fetch(
    "https://insightfullantern.onrender.com/create",
    {
     method: "POST",
     headers: {
      "Content-Type": "application/json",
     },
     body: JSON.stringify(postData),
    }
   );

   if (response.ok) {
    const responseData = await response.json();
    console.log(responseData);
    setCategory("");
    setTitle("");
    setPost("");
   } else {
    throw new Error("Failed to create post");
   }
  } catch (error) {
   console.error("Error creating post:", error);
  } finally {
   setIsPosting(false);
  }
 };

 return (
  <div className="flex flex-col items-center w-screen">
   <Navbar />
   <div
    className="mt-10 bg-creamy base-text rounded-xl p-4 w-1/3 h-1/2"
    style={{
     marginTop: 130,
    }}
   >
    <h1 className="text-2xl base-text font-bold border-b-2 base-border mb-2">
     Share your story
    </h1>
    <div className="space-y-6">
     <div>
      <label
       htmlFor="category"
       className="block text-lg font-bold  leading-6  base-text "
      >
       Category
      </label>
      <div className="mt-2">
       <select
        id="category"
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        className="select select-bordered bg-creamy w-full  border-2 base-border"
       >
        <option value="" className="font-bold">
         Select Category
        </option>
        {CATEGORIES.map((cat, index) => (
         <option key={index} value={cat}>
          {cat}
         </option>
        ))}
       </select>
      </div>
     </div>

     <div>
      <label htmlFor="title" className="font-bold text-lg">
       Title Your Post
      </label>
      <div className="mt-2">
       <input
        id="title"
        name="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="input input-bordered bg-creamy base-border border-2 w-full "
       />
      </div>
     </div>
        <div>
            <label htmlFor="post" className="block text-lg font-bold leading-6">
                Post
            </label>
            <div className="mt-2">
                <textarea
                    id="post"
                    name="post"
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                    required
                    className="select select-bordered bg-creamy w-full border-2 base-border"
                />
            </div>
        </div>
     <div className="mr-auto">
      <a href="/">
      <button
       onClick={createPost}
       disabled={isPosting}
       className={`self-end lantern-btn ${
        isPosting ? "opacity-40 cursor-not-allowed" : ""
       }`}
      >
       {isPosting ? "Posting..." : "Post"}
      </button>
      </a>
     </div>
    </div>
   </div>
  </div>
 );
}

export default CreatePost;
