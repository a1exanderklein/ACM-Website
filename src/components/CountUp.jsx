import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CountUp = ({ end, className, prefix = '', suffix = '', formatNumber = false }) => {
  const [displayNumber, setDisplayNumber] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.5,
});

  useEffect(() => {
    let animationTimeout = null;
    if (inView) {
      let duration = 0.1; // Default duration
      let countSpeed = 0.1 * 1000 / end; // Default speed
  
      // Differential speeds for smaller values
      if (end <= 20) { 
        duration = 1.5;
        countSpeed = 1.5 * 1000 / end;
      } 
      else if (end > 1000) { 
        duration = 0.05;
        countSpeed = 0.05 * 1000 / end;
      }
  
      animationTimeout = setTimeout(() => {
        controls.start({ opacity: 1, y: 0, transition: { duration } });
        const counter = setInterval(() => {
          setDisplayNumber(prevNum => {
            if (prevNum < end) {
              return prevNum + 1;
            } else {
              clearInterval(counter);
              return end;
            }
          });
        }, countSpeed);
      }, 500); // Delay before starting the count
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
    return () => {
      if (animationTimeout) {
        clearTimeout(animationTimeout);
      }
    };
  }, [controls, inView, end]);

  const formatDisplayNumber = (number) => {
    let formattedNumber = number;
    if (formatNumber) {
      formattedNumber = new Intl.NumberFormat().format(number);
    }
    return `${prefix}${formattedNumber}${suffix}`;
  };

  return (
    <motion.div ref={ref} animate={controls} initial={{ opacity: 0, y:20 }} className={className}>
      {formatDisplayNumber(displayNumber)}
    </motion.div>
  );
};

export default CountUp;