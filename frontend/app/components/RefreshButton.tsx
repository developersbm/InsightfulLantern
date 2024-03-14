"use client";
import React from "react";
import Image from "next/image";

function Refresh() {
 return (
  <a href="/">
   <div className="fixed bottom-10 left-10 lantern-btn flex">
    <Image
     src="/icons/RefreshIcon.svg"
     width={40}
     height={40}
     alt="Refresh Icon"
    />
   </div>
  </a>
 );
}

export default Refresh;
