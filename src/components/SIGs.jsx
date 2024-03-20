import * as React from "react";
import { motion } from 'framer-motion';
import ExpandableCard from "./ExpandableCard";


function SIGs() {

    const groups = [
        { title: "Gator VR", 
            text: "The University of Florida's Virtual Reality Club. Facilitates student run projects and showcases the latest VR technologies.", 
            discord: "https://discord.gg/AdKKJav",
            link: "https://www.bloomberg.com", 
            imgSrc: require("../assets/gatorvr.png") },
        { title: "Open Source Club", 
            text: "We are a community of makers, who want to solve problems and improve our world using open source projects.", 
            discord: "https://discord.gg/Gsxej6u",
            link: "https://ufosc.org/", 
            imgSrc: require("../assets/osc.png")},
        { title: "Student InfoSec Team", 
            text: "The Cybersecurity club at the University of Florida. Student-led and passionate about all things cybersecurity.", 
            discord: "https://discord.gg/H9k5GEStg6",
            link: "https://www.centene.com", 
            imgSrc: require("../assets/ufsit.png") },
        { title: "Programming Team", 
            text: "Represents the University of Florida in a variety of computer programming contests, under the umbrella of the UF ACM chapter.", 
            discord: "https://discord.gg/kjpUz5tkZ5",
            link: "https://www.meta.com", 
            imgSrc: require("../assets/progteam.png") },
    ]

    return (
        <motion.div className="sig-cards">
            {groups.map((group) => (
                <ExpandableCard title={group.title} text={group.text} imgSrc={group.imgSrc}/>
            ))}
        </motion.div>
    )
};

export default SIGs;

