import React, { useContext } from "react";
import { Link } from "react-router-dom";
import womanPng from "../assets/img/home/woman.png";
import { motion } from "framer-motion";
import { transition1 } from "../transition";
import { CursorContext } from "../context/CursorContext";

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className=" section"
    >
      <div className=" container mx-auto">
        {/**text and image */}
        <div>
          {/**text */}
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={{ duration: 0.7 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className=" pt-28 pb-14 w-full lg:pt-0 lg:pb-0 lg:absolute lg:w-auto z-10 flex flex-col justify-center lg:h-screen items-center lg:items-start"
          >
            <h1 className="text-[44px] lg:text-[70px] font-primary font-bold capitalize leading-[120%] tracking-[-0.0.53m mb-2]">
              photographer <br /> & film maker
            </h1>
            <p className=" text-[24px] lg:text-[30px] mb-[10px]">
              Los Angles, USA
            </p>
            <Link className=" btn" to={"/contacts"}>
              Hire Me
            </Link>
          </motion.div>
          {/**image */}
          <div className=" flex justify-end max-h-[700px] lg:max-h-max">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.7 }}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className=" relative lg:-right-36 overflow-hidden"
            >
              <motion.img
                className=" w-[500px] md:w-[800px]"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
                src={womanPng}
                alt="Woman"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
