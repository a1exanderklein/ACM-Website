import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

function useDimensions (ref) {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimensions = () => {
        setDimensions({
            width: ref.current.offsetWidth,
            height: ref.current.offsetHeight,
        });
        };

        // Update dimensions on mount
        updateDimensions();

        // Update dimensions on window resize
        const handleResize = () => {
        updateDimensions();
        };
        window.addEventListener("resize", handleResize);

        // Clean up
        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, [ref]);

    return dimensions;
};

function Menu() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className="menu_background"
        variants={{
          open: { opacity: 1, display: "block" },
          closed: { opacity: 0, transitionEnd: { display: "none" } }
        }}
        animate={isOpen ? "open" : "closed"}
      />
      <motion.div
        variants={{
          open: { opacity: 1, display: "block" },
          closed: { opacity: 0, transitionEnd: { display: "none" } }
        }}
        animate={isOpen ? "open" : "closed"}
      >
        <Navigation toggleOpen={toggleOpen}/>
      </motion.div>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default Menu;