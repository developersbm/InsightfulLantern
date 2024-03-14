"use client";
import React, { useEffect, useState } from "react";
import { motion, MotionStyle, Variants } from "framer-motion";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { getPostData } from "../firebase/firestore";

function SpawnLanterns({ category }: any) {
 const session = useSession({
  required: true,
  onUnauthenticated() {
   redirect("/screens/signin");
  },
 });

 const imgStyle = {
  cursor: "pointer",
 };

 const [lantern, setLantern] = useState(0);
 const [windowWidth, setWindowWidth] = useState(0);
 const [posts, setPosts] = useState([]);
 // Use useEffect to access window.innerWidth
 useEffect(() => {
  const fetchData = async () => {
   try {
    const citiesData: any = await getPostData(category);
    setPosts(citiesData);
    setLantern(citiesData.length);
   } catch (error: any) {
    console.error("Error fetching cities:", error.message);
   }
  };

  fetchData();

  setWindowWidth(window.innerWidth);
  const handleResize = () => {
   setLantern((prev) => Math.floor(Math.random() * (windowWidth - 50)) + 50);
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
 }, []); // Empty dependency array to run effect only once

 const balloonVariants: Variants = {
  initial: { y: 700, opacity: 0, scale: 1 },
  animate: { y: -500, opacity: 1, scale: 1 },
  exit: { opacity: 0, y: -505 }, // Slightly above the top of the screen
 };

 const balloonStyle: MotionStyle = {
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  background: "transparent",
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "14px",
  color: "white",
 };

 return (
  <div>
   {posts.map((e: any, index) => {
    return (
     <>
      <motion.div
       key={index}
       style={{
        ...balloonStyle,
        left: `${Math.random() * (windowWidth - 50)}px`,
       }}
       initial="initial"
       animate="animate"
       exit="exit"
       variants={balloonVariants}
       transition={{
        duration: Math.floor(Math.random() * 6) + 10,
        ease: "linear",
        delay: index * 0.5,
        yoyo: Infinity,
       }}
      >
       {/* Image */}
       <label
        data-tip={e?.data?.title}
        className="tooltip text-lg"
        htmlFor={`modal-${index}`}
       >
        <img style={imgStyle} src="/assets/lantern.png"></img>
       </label>
      </motion.div>

      {/* Modal */}
      <div className="tooltip">
        <input type="checkbox" id={`modal-${index}`} className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box text-slate-300 modal-creamy base-text h-1/2">
            <h3 className="w-2/3 text-left font-bold border-b-2 base-border text-2xl">
              {e?.data?.title}
            </h3>
            <p className="text-left">{e?.data?.content}</p>
            
            {/* Text input and submit button */}
            <div className="flex items-center justify-between mt-4">
              <input type="text" className=" input input-bordered bg-creamy base-border border-2 w-10/12" placeholder="Your reply here" />
              <button className="link base-text">Reply</button>
            </div>
            
            <div className="modal-action absolute top-0 right-5">
              <label htmlFor={`modal-${index}`} className="link base-text">
                Return &rarr;
              </label>
            </div>
          </div>
        </div>
      </div>
     </>
    );
   })}
  </div>
 );
}

export default SpawnLanterns;
