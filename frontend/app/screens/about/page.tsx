"use client";
import Navbar from "@/app/components/Navbar";
import React from "react";
import CircularMenu from "@/app/components/Moon/moon";
import styled from "styled-components";
import "./page.css"; // Import your CSS file for styling

const App = () => {
  return (
    <div
      className="app-container "
      style={{
        fontFamily: "Mulish, sans-serif",
        color: "white",
      }}
    >
      <Navbar />

      <div className="about-container">
        <h1>About</h1>
        <p>
          Welcome to Insightful Lanterns, your compassionate companion on the
          journey to emotional well-being. In a world that often moves too fast,
          finding a safe space to share, connect, and seek guidance can be a
          transformative experience. Our therapeutic environment is designed to
          be that haven — a place where individuals can freely express their
          thoughts, concerns, and emotions in a supportive environment.
        </p>
        <p>
          At Insightful Lanterns, we understand that life presents challenges,
          from health and family issues to relationship, work, and
          school-related stress. We believe in the power of human connection and
          the healing that comes from sharing your story. Our platform empowers
          users to speak openly about their problems, fostering a community that
          listens without judgment through our sentiment analysis software.
        </p>
        <p>
          Life is a journey, and sometimes we all need a little help along the
          way. Insightful Lanterns is here to remind you that you are not alone.
          Join our community, speak your truth, and discover the healing power
          of sharing. Together, let us navigate life challenges and celebrate
          the victories, big and small. Welcome to a space where your voice
          matters and your well-being is our priority.
        </p>
      </div>
    </div>
  );
};

export default App;
