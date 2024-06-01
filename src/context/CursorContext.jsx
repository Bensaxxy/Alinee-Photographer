import React, { createContext, useEffect, useState } from "react";

// create context
export const CursorContext = createContext();
const CursorProvider = ({ children }) => {
  // cursor position state
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });

  //cursor BG state
  const [cursorBG, setCursorBG] = useState("default");

  const mobileViewPointIsActive = window.innerWidth < 768;

  useEffect(() => {
    if (!mobileViewPointIsActive) {
      const move = (e) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", move);
      // remove event

      return () => {
        window.removeEventListener("mousemove", move);
      };
    } else {
      setCursorBG("none");
    }
  });

  //cursor variants

  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: "#0e1112",
    },
    text: {
      width: "150px",
      height: "150px",
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    none: {
      width: 0,
      height: 0,
    },
  };

  // mouse enter handler
  const mouseEnterHandler = () => {
    setCursorBG("text");
  };

  // mouse leave handler
  const mouseLeaveHandler = () => {
    setCursorBG("default");
  };

  return (
    <CursorContext.Provider
      value={{ cursorVariants, cursorBG, mouseEnterHandler, mouseLeaveHandler }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
