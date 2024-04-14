import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CountUp = ({ start = 0, end, className, prefix = '', suffix = '', formatNumber = false }) => {
  const [displayNumber, setDisplayNumber] = useState(start);
  const controls = useAnimation();
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.5,
  });

  useEffect(() => {
    let animationTimeout = null;
    if (inView) {
      let duration = 0.1; 
      let changeFunction;

      if (start > end) {
        duration = 1.0; 
        changeFunction = prevNum => Math.max(prevNum - 1, end); // Count down
      } else 
      if (end > 1000){
        duration = 1.0; 
        changeFunction = prevNum => Math.min(prevNum + Math.ceil((end - start) / 100), end); // Count up
      }
      else
      {
        changeFunction = prevNum => Math.min(prevNum + 1, end);
      }
      
      let countSpeed = duration * 1000 / Math.abs(end - start);

      animationTimeout = setTimeout(() => {
        controls.start({ opacity: 1, y: 0, transition: { duration } });
        const counter = setInterval(() => {
          setDisplayNumber(changeFunction);
        }, countSpeed);
      }, 300);
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
    return () => {
      if (animationTimeout) {
        clearTimeout(animationTimeout);
      }
    };
  }, [controls, inView, start, end]);

  const formatDisplayNumber = (number) => {
    let formattedNumber = number;
    if (formatNumber) {
      formattedNumber = new Intl.NumberFormat().format(number);
    }
    return `${prefix}${formattedNumber}${suffix}`;
  };

  return (
    <motion.div ref={ref} animate={controls} initial={{ opacity: 0, y: 20 }} className={className}>
      {formatDisplayNumber(displayNumber)}
    </motion.div>
  );
};

export default CountUp;
