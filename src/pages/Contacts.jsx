import React, { useContext } from "react";
import womanPng from "../assets/img/contact/woman.png";
import { motion } from "framer-motion";
import { CursorContext } from "../context/CursorContext";

const Contacts = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0" }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ duration: 0.7 }}
      className=" section"
    >
      <div className=" mx-auto container h-full">
        <div className=" flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-6">
          {/**bg */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.7 }}
            className=" hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10 "
          ></motion.div>
          {/**text and form */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className=" lg:flex-1 px-4"
          >
            <h1 className="text-[44px] lg:text-[70px] font-primary font-bold capitalize leading-[120%] tracking-[-0.0.53m mb-2]">
              Contacts
            </h1>
            <p className=" mb-12">i would like to get suggestions from you</p>

            <form className=" flex flex-col gap-y-6">
              <div className=" flex gap-x-10">
                <input
                  className=" outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full placeholder:text-[#757879] pl-3"
                  placeholder="your name"
                  type="text"
                />
                <input
                  className=" outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full placeholder:text-[#757879] pl-3"
                  placeholder="your email address"
                  type="email"
                />
              </div>
            </form>
            <input
              className=" outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full placeholder:text-[#757879] pl-3"
              placeholder="Enter you message"
              type="email"
            />
            <button className=" btn mx-auto my-[26px] lg:mx-0 self-start">
              Send it
            </button>
          </div>
          {/**image */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={{ duration: 0.7 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className=" lg:flex-1"
          >
            <img className="w-[350px] lg:w-[350px]" src={womanPng} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contacts;
