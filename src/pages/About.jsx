import React, { useContext } from "react";
import { Link } from "react-router-dom";
import womanPng from "../assets/img/about/woman.png";
import { motion } from "framer-motion";
import { CursorContext } from "../context/CursorContext";

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0" }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ duration: 0.7 }}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className=" section"
    >
      <div className=" container mx-auto h-full relative">
        {/**text & img wrapper */}
        <div className=" h-screen flex flex-col justify-center items-center lg:flex-row text-center lg:text-left gap-x-24 ">
          {/**img */}
          <div className="flex-1 order-2 lg:order-none max-h-[800px] lg:max-h-max overflow-hidden">
            <img src={womanPng} />
          </div>
          {/**text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={{ duration: 0.7 }}
            className=" flex-1 p-7 pt-28 pb-14 flex flex-col justify-center items-center z-10 lg:pt-0 lg:w-auto lg:items-start"
          >
            <h1 className="text-[44px] lg:text-[70px] font-primary font-bold capitalize leading-[120%] tracking-[-0.0.53m mb-2]">
              About Me
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              porttitor rutrum ipsum, in malesuada risus ultrices eu. Quisque
              nec nibh eget magna interdum commodo.
            </p>
            <br />
            <p className="mb-6">
              Nulla ipsum lacus, elementum et commodo ut, dapibus at eros. Etiam
              et nibh quis ipsum vulputate auctor. Ut eget leo aliquam, faucibus
              nisi a, tincidunt enim.
            </p>

            <Link to={"/portfolio"} className="btn">
              VIEW MY WORK
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
