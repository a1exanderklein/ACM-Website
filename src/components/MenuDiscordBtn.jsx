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

export const MenuDiscordBtn = ({ item }) => {
  return (
    <motion.li
      className="menu_list_discord"
      variants={variants}
    >
        <div className='flex items-center menu_item'><a href="https://discord.gg/wcYxbcgbVN" className='discord-btn'></a></div> 
    </motion.li>
  );
};