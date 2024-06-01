import React, { useContext } from "react";
import image1 from "../assets/img/portfolio/1.png";
import image2 from "../assets/img/portfolio/2.png";
import image3 from "../assets/img/portfolio/3.png";
import image4 from "../assets/img/portfolio/4.png";
import image5 from "../assets/img/portfolio/5.png";
import image6 from "../assets/img/portfolio/6.png";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { CursorContext } from "../context/CursorContext";

const portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0" }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ duration: 0.7 }}
      className="section px-2"
    >
      <div className=" container mx-auto relative h-full">
        <div className=" flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-6">
          {/**text */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className=" flex flex-col lg:items-start"
          >
            <h1 className="text-[44px] lg:text-[70px] font-primary font-bold capitalize leading-[120%] tracking-[-0.0.53m mb-2]">
              Portfolio
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

            <Link to={"/contacts"} className="btn mx-auto lg:mx-0 mb-[30px]">
              Hire me
            </Link>
          </div>
          {/**image grid*/}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={{ duration: 0.7 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className=" grid grid-cols-2 lg:gap-2"
          >
            {/**image*/}
            <div className=" bg-accent max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]  overflow-hidden">
              <img
                className=" object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={image1}
              />
            </div>
            <div className=" bg-accent max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] overflow-hidden">
              <img
                className=" object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={image2}
              />
            </div>
            <div className=" bg-accent max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] overflow-hidden">
              <img
                className=" object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={image3}
              />
            </div>
            <div className=" bg-accent max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] overflow-hidden">
              <img
                className=" object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={image4}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default portfolio;
