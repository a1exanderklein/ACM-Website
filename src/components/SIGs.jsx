import * as React from "react";
import { motion } from 'framer-motion';
import ExpandableCard from "./ExpandableCard";


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

    return (
        <div className='bg-[#18191A]'>
            <h1 id='sigs' className='flex justify-center pt-8'>Special Interest Groups</h1>
            <motion.div className="sig-cards">
                {groups.map((group) => (
                    <ExpandableCard title={group.title} text={group.text} imgSrc={group.imgSrc} discord={group.discord} link={group.link}/>
                ))}
            </motion.div>
        </div>
        
    )
};

export default SIGs;

