import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { motion } from "framer-motion";
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
import { CursorContext } from "./context/CursorContext";

const App = () => {
  const { cursorVariants, cursorBG } = useContext(CursorContext);
  return (
    <div>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
      {/**cursor */}
      <motion.div
        variants={cursorVariants}
        animate={cursorBG}
        className=" bg-black w-[32px] h-[32px] fixed top-0 left-0 z-40 pointer-events-none rounded-full"
      ></motion.div>
    </div>
  );
};

export default App;
