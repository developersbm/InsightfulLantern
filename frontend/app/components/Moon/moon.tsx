import React, { useState } from "react";

function CircularMenu() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <style>
        {`
        .containerMoon
        {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: linear-gradient(to top, rgb(4, 21, 39), rgb(1, 7, 15)), url('/assets/cleanbackground.png');
          }
        
        .menuMoon
        {
            position: relative;
            width: 500px;
            height: 250px;
            background: #f0f0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .menuItemMoon
        {
            position: absolute;
            margin-right: 200px;
            left: 0;
            margin-top: -20px;
            list-style: none;
            transform-origin: 240px;
            transition: 0.5s;
            transition-delay: calc(0.1s * var(--i));
            transform: rotate(0deg) translateX(80px);
            text-decoration: none;
        }
        
        .menuMoon.activeMoon .menuItemMoon
        {
            transform: rotate(calc(360deg / 8 * var(--i)));
        }
        
        .menuItemMoon a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 70px;
          height: 70px;
          background: radial-gradient(
            circle at 50% 50%,
            #ffe7b0 0%,
            #fed05c 51.04%,
            #c58000 100%
          );
          border-radius: 50%;
          transform: rotate(calc(360deg / 8 * var(--i)));
          box-shadow: 0 0 20px #938200;
          color: #111;
          animation: glow 1.5s infinite alternate;
        }
        
        @keyframes glow {
          from {
              box-shadow: 0 0 10px #938200, 0 0 20px #938200, 0 0 30px #938200;
          }
          to {
              box-shadow: 0 0 20px #938200, 0 0 30px #938200, 0 0 40px #938200;
          }
      }
        .menuItemMoon a:hover
        {
            color: #ff1252;
        }
        
        .toggleMoon
        {
            position: absolute;
            width: 60px;
            height: 60px;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
            font-size: 2em;
            transition: transform 1.25s;
          transform: scale(5.0);
        }
        
        .menuMoon.activeMoon .toggleMoon
        {
            transform: rotate(315deg);
        }
        
        .hideMoon {
            visibility: hidden;
        }
        
        .hideMoon.hiddenMoon {
            visibility: visible;
        }
        `}
      </style>
      <div className="containerMoon">
        <div className={`menuMoon ${isActive ? "activeMoon" : ""}`}>
          <div className="toggleMoon" onClick={toggleMenu}>
            <img src="/assets/moon.png" alt="Toggle Image" />
          </div>
          <div className={`hideMoon ${isActive ? "hiddenMoon" : "hideMoon"}`}>
            <ul>
              <li style={{ "--i": 0 } as any} className="menuItemMoon">
                <a href="/screens/categories/5">
                  <p style={{ transform: "rotate(360deg)" }}>School</p>
                </a>
              </li>
              <li style={{ "--i": 1 } as any} className="menuItemMoon">
                <a href="/screens/categories/0">
                  <p style={{ transform: "rotate(270deg)" }}>Coding</p>
                </a>
              </li>
              <li style={{ "--i": 2 } as any} className="menuItemMoon">
                <a
                  style={{ transform: "rotate(270deg)" }}
                  href="/screens/categories/3"
                >
                  <p>Love</p>
                </a>
              </li>
              <li style={{ "--i": 3 } as any} className="menuItemMoon">
                <a href="/screens/categories/4">
                  <p style={{ transform: "rotate(90deg)" }}>Work</p>
                </a>
              </li>
              <li style={{ "--i": 4 } as any} className="menuItemMoon">
                <a href="/screens/categories/2">
                  <p>Health</p>
                </a>
              </li>
              <li style={{ "--i": 5 } as any} className="menuItemMoon">
                <a href="#">
                  <p style={{ transform: "rotate(270deg)" }}>Anxiety</p>
                </a>
              </li>
              <li style={{ "--i": 6 } as any} className="menuItemMoon">
                <a href="/screens/categories/1">
                  <p style={{ transform: "rotate(180deg)" }}>General</p>
                </a>
              </li>
              <li style={{ "--i": 7 } as any} className="menuItemMoon">
                <a href="/family">
                  <p style={{ transform: "rotate(90deg)" }}>Family</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CircularMenu;
