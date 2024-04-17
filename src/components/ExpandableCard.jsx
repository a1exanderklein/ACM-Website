import * as React from "react";
import { motion } from 'framer-motion';
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaDiscord, FaLink  } from "react-icons/fa";
import { useEffect } from "react";

function ExpandableCard(group) {
    const [isOpen, setIsOpen] = useState(false)
    const [rotationAngle, setRotationAngle] = useState(0);

    const toggleCard = () => {
        const newState = !isOpen;
        setIsOpen(newState);
        setRotationAngle(rotationAngle === 0 ? 180 : 0);
    };

    const [isMobile, setIsMobile] = useState(window.innerWidth < 872 || window.innerHeight < 800);

    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 872 || window.innerHeight < 800);
        };

        window.addEventListener('resize', handleResize);

        // Call handleResize once to set the initial state correctly
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="box">
            <motion.div 
                transition={{layout: { duration: 1, type: 'spring'}}}
                style={{borderRadius: '1rem'}}
                layout
                className={isMobile ? "card" : "frosted-card card"}
            >
                <motion.img layout='position' src={group.imgSrc} alt={group.title} />
                <motion.h2 
                    layout='position' 
                    style={{fontWeight: "bold", fontSize: "20px"}}
                >
                    {group.title}
                </motion.h2>
                {isOpen && (
                    <motion.div 
                        layout='position'
                        transition={{duration: .3}}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        className="expand"
                    >
                        <p className="sig-p">{group.text}</p>
                    </motion.div>
                )}
                <motion.div className="card-links" layout='position'>
                    <motion.a className='card-link-icon' href={group.discord}>
                        <FaDiscord style={{fontSize: "23px"}}/>
                    </motion.a>
                    <motion.a className='card-link-icon' href={group.link}>
                        <FaLink />
                    </motion.a>
                </motion.div>
                <motion.div layout='position' className='card-arrow-container' onClick={toggleCard} >
                    <IoIosArrowDown style={{ transform: `rotate(${rotationAngle}deg)` }} className='card-arrow'/>
                </motion.div>
            </motion.div>
        </div>
    )
};

export default ExpandableCard;