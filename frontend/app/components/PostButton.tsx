import React from "react";
import Link from "next/link";

const PostButton = () => {
 return (
  <Link href="/screens/create-post">
   <span
    className="post-button lantern-btn fixed bottom-10 right-10"
    // style={{
    //   position: "fixed",
    //   bottom: "50px",
    //   right: "50px",
    //   width: "80px",
    //   height: "80px",
    //   borderRadius: "50%",
    //   backgroundColor: "#007bff",
    //   color: "white",
    //   border: "none",
    //   fontSize: "24px",
    //   cursor: "pointer",
    //   boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    //   zIndex: "1000",
    //   display: "flex",
    //   alignItems: "center",
    //   justifyContent: "center",
    // }}
   >
    🤗 Share your thoughts
   </span>
  </Link>
 );
};

export default PostButton;
