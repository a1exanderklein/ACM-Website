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

    const [viewportState, setViewportState] = useState({
        isMobile: window.innerWidth < 872 || window.innerHeight < 632,
        scale: window.innerHeight < 1200 && window.innerWidth < 1703 ? .75 : 1,
        adjustHeight: window.innerWidth > 639 && window.innerWidth < 1282,
    });


    useEffect(() => {
        const handleResize = () => {
            // Determine if the viewport is in mobile state and calculate the scale
            const isMobile = window.innerWidth < 872 || window.innerHeight < 632;
            const scale = window.innerHeight < 1000 && window.innerWidth < 1000 ? .75 : 1;
            const adjustHeight = window.innerWidth > 687 && window.innerWidth < 1282;
           
            setViewportState({ isMobile, scale, adjustHeight });
           
            // Update the gap based on the new scale value
            const sigCardsElement = document.querySelector('.sig-cards');
            const cardGap = scale < 1 ? '1px' : '3rem';
            const yPosition = '938px';
            if (sigCardsElement) {
                sigCardsElement.style.setProperty('--sig-card-gap', cardGap);
                sigCardsElement.style.setProperty('--card-y-position', yPosition);
            }
        };


        // Call handleResize immediately to set initial state based on current viewport
        handleResize();


        // Listen for resize events to update state
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);


    }, []);


    return (
        <div className='sig-bg-image sm:min-h-screen'>
            <h1 id='sigs' className='flex justify-center text-center p-8'>Special Interest Groups</h1>


            {viewportState.isMobile ? (   // If mobile, display the Swiper SIGS component


            <div className="pb-8">
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}>
                    {groups.map((group, index) => (
                        <SwiperSlide key={index}>
                            <ExpandableCard title={group.title} text={group.text} imgSrc={group.imgSrc} discord={group.discord} link={group.link} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


            ) : (   // , else display the framer motion SIGS


                // Non-Mobile view with conditional scaling
                <motion.div className="flex-wrap sig-cards justify-center" style={{'--sig-card-gap': '3rem'}}>
                    {groups.map((group, index) => (
                        <motion.div key={index} style={{
                            transform: `scale(${viewportState.scale})`,
                            transformOrigin: 'center',
                        }}>


                            <ExpandableCard title={group.title} text={group.text} imgSrc={group.imgSrc} discord={group.discord} link={group.link}/>
                        </motion.div>
                    ))}
                </motion.div>
           
            )}
        </div>
    )
};


export default SIGs;

