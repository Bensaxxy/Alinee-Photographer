import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 120,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 120,
      },
    },
  };

  return (
    <nav className="lg:hidden">
      {/**nav open button */}
      <div onClick={() => setOpenMenu(!openMenu)}>
        <HiMenuAlt3 size={30} />
      </div>
      {/**menu */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            className="bg-white absolute top-0 right-0 h-screen max-w-[50%] w-full drop-shadow-lg"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/**close icon */}
            <div>
              <IoCloseCircleOutline
                className="absolute top-7 left-3 cursor-pointer"
                size={35}
                onClick={() => setOpenMenu(false)}
              />
            </div>
            <ul className="flex flex-col items-center justify-center h-full font-primary font-bold text-3xl gap-y-8 text-primary">
              <li>
                <Link to={"/"} onClick={() => setOpenMenu(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/about"} onClick={() => setOpenMenu(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to={"/portfolio"} onClick={() => setOpenMenu(false)}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to={"/contacts"} onClick={() => setOpenMenu(false)}>
                  Contacts
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
