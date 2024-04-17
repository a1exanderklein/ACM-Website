import * as React from "react";
import { motion } from "framer-motion";

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

function ScrollSection(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
      element.scrollIntoView({ block: "start", behavior: "smooth" });
  }
}



export const MenuItem = ({ item, toggleOpen }) => {
  const handleClick = () => {
    ScrollSection(item.id);
    toggleOpen(); // Close the menu
  };

  return (
    <motion.li
      className="menu_list_item"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="menu_item" onClick={handleClick}>{item.text}</span>
    </motion.li>
  );
};
