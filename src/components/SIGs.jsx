import * as React from "react";
import { motion } from 'framer-motion';
import ExpandableCard from "./ExpandableCard";
import { useState, useEffect } from "react";
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper/modules';


function SIGs() {

    const groups = [
        { title: "Gator VR", 
            text: "The Virtual Reality club at the UF. Facilitates student projects and showcases the latest VR technologies.", 
            discord: "https://discord.gg/AdKKJav",
            link: "https://linktr.ee/gatorvr", 
            imgSrc: require("../assets/gatorvr.png") },
        { title: "Open Source Club", 
            text: "We are a community of makers, who want to solve problems and improve our world using open source projects.", 
            discord: "https://discord.gg/Gsxej6u",
            link: "https://ufosc.org/", 
            imgSrc: require("../assets/osc.png")},
        { title: "Student InfoSec Team", 
            text: "The Cybersecurity club at the UF. Student-led and passionate about all things cybersecurity.", 
            discord: "https://discord.gg/H9k5GEStg6",
            link: "https://ufsit.club/", 
            imgSrc: require("../assets/ufsit.png") },
        { title: "Programming Team", 
            text: "Represents UF in a variety of computer programming contests, under the umbrella of the UF ACM chapter.", 
            discord: "https://discord.gg/kjpUz5tkZ5",
            link: "", 
            imgSrc: require("../assets/progteam.png") },
    ]

    const [isMobile, setIsMobile] = useState(window.innerWidth < 872); 

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 872);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, []);

    return (
        <div className='sig-bg-image'>
            <h1 id='sigs' className='flex justify-center text-center p-8'>Special Interest Groups</h1>

            {isMobile ? (   // If mobile, display the Swiper SIGS component

            <div className="pb-8">
                <Swiper 
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    >
                     {groups.map((group, index) => (
                        <SwiperSlide key={index}>
                            <ExpandableCard title={group.title} text={group.text} imgSrc={group.imgSrc} discord={group.discord} link={group.link} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            ) : (   // , else display the framer motion SIGS

                <motion.div className="sig-cards max-w-full flex-wrap justify-center sm:px-4">
                    {groups.map((group) => (
                        <ExpandableCard title={group.title} text={group.text} imgSrc={group.imgSrc} discord={group.discord} link={group.link}/>
                    ))}
                </motion.div>
            )}
                
        </div>
    )
};

export default SIGs;

