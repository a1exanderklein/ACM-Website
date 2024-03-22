import * as React from "react";
import { motion } from 'framer-motion';
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaDiscord, FaLink  } from "react-icons/fa";

function ExpandableCard(group) {
    const [isOpen, setIsOpen] = useState(false)
    const [rotationAngle, setRotationAngle] = useState(0);

    const toggleCard = () => {
        setIsOpen(!isOpen);
        setRotationAngle(rotationAngle === 0 ? 180 : 0);
    };

    return (
        <div className="box">
            <motion.div 
                transition={{layout: { duration: 1, type: 'spring'}}}
                style={{borderRadius: '1rem'}}
                layout
                className="card"
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