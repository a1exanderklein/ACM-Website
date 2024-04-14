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

function ScrollSection(elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ block: "start", behavior: "smooth" });
}

const menuItems = [
    { text: "Home", onClick: () => ScrollSection("home"), id: "home" },
    { text: "About", onClick: () => ScrollSection("about"), id: "about" },
    { text: "Sponsors", onClick: () => ScrollSection("sponsors"), id: "sponsors" },
    { text: "SIGs", onClick: () => ScrollSection("sigs"), id: "sigs" },
];

export const Navigation = () => (
  <motion.ul className="menu_ulist" variants={variants}>
    {menuItems.map((item) => (
      <MenuItem item={item} key={item.text} />
    ))}
    <MenuDiscordBtn />
    
  </motion.ul>
);



