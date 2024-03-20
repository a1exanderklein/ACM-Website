import * as React from "react";
import { motion } from 'framer-motion';
import { useState } from "react";

function ExpandableCard(group) {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className="box">
            <motion.div 
                transition={{layout: { duration: 1, type: 'spring'}}}
                style={{borderRadius: '1rem'}}
                layout
                onClick={() => setIsOpen(!isOpen)} 
                className="card"
            >
                <motion.img layout='position' src={group.imgSrc} alt={group.title} />
                <motion.h2 layout='position'>{group.title}</motion.h2>
                {isOpen && (
                    <motion.div 
                        transition={{duration: .3}}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        className="expand"
                    >
                        <p>{group.text}</p>
                    </motion.div>
                )}
                <motion.div layout='position'>
                    <a href={group.discord}>
                        Discord
                    </a>
                </motion.div>
            </motion.div>
        </div>
    )
};

export default ExpandableCard;