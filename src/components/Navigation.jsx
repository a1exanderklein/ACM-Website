import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { MenuDiscordBtn } from "./MenuDiscordBtn";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};


const menuItems = [
    { text: "Home", id: "home" },
    { text: "About", id: "about" },
    { text: "Sponsors", id: "sponsors" },
    { text: "SIGs", id: "sigs" },
];

export const Navigation = ({ toggleOpen }) => (
  <motion.ul className="menu_ulist" variants={variants}>
    {menuItems.map((item) => (
      <MenuItem item={item} key={item.text} toggleOpen={toggleOpen}/>
    ))}
    <MenuDiscordBtn />
    
  </motion.ul>
);



