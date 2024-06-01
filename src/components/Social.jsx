import React from "react";
import { useContext } from "react";
import {
  FaFacebook,
  FaPinterest,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CursorContext } from "../context/CursorContext";

const Social = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className=" hidden lg:flex ml-24"
    >
      <ul className=" flex gap-x-4 items-center">
        <li>
          <a href="" target="_blank">
            <FaFacebook size={16} />
          </a>
        </li>
        <a href="" target="_blank">
          <FaXTwitter size={16} />
        </a>
        <li>
          <a href="" target="_blank">
            <FaInstagram size={16} />
          </a>
        </li>
        <a href="" target="_blank">
          <FaPinterest size={16} />
        </a>
        <li>
          <a href="" target="_blank">
            <FaYoutube size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
