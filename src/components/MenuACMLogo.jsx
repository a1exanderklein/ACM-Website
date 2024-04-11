import * as React from "react";
import { motion } from "framer-motion";
import  ACMLogo  from "../assets/acmlogo.png";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuACMLogo = ({ item }) => {
  return (
    <motion.li
      className="menu_list_acm"
      variants={variants}
    >
      <img src={ACMLogo} alt="UF ACM" className="menu_item" />
    </motion.li>
  );
};