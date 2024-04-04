import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

function Officers() {
    const officers1 = [
        {
            name: "Victor Polisetty",
            position: "President",
            linkedin: "https://www.linkedin.com/in/victorpolisetty/",
            imgSrc: require('../assets/headshots/Victor+Headshots.jpg'),
        },
        {
            name: "Norman Bukingolts",
            position: "External Vice President",
            linkedin: "https://www.linkedin.com/in/norman-codes/",
            imgSrc: require('../assets/headshots/Norman+Headshot.jpg'),
        },
        {
            name: "Courtney Giang",
            position: "Internal Vice President",
            linkedin: "https://www.linkedin.com/in/courtney-giang/",
            imgSrc: require('../assets/headshots/Courtney+Headshot.jpg'),
        },
        
        
    ]
    const officers2 = [
        {
            name: "Alexander Klein",
            position: "Secretary",
            linkedin: "https://www.linkedin.com/in/alexanderkleincs/",
            imgSrc: require('../assets/headshots/Alexander+Headshot.jpg'),
        },
        {
            name: "Shreyas Kodela",
            position: "Treasurer",
            linkedin: "https://www.linkedin.com/in/shreyaskodela/",
            imgSrc: require('../assets/headshots/Shreyas-headshot.jpg'),
        },
        {
            name: "Maya Harris",
            position: "Marketing Lead",
            linkedin: "https://www.linkedin.com/in/mjoyharris/",
            imgSrc: require('../assets/headshots/Maya+Headshot.jpg'),
        },
        {
            name: "Jack Crew",
            position: "Professional Affairs Lead",
            linkedin: "https://www.linkedin.com/in/jack-crew/",
            imgSrc: require('../assets/headshots/Jack+Headshot.jpg'),
        },
        {
            name: "Andrew Ruales",
            position: "Workshop Lead",
            linkedin: "https://www.linkedin.com/in/andrewruales/",
            imgSrc: require('../assets/headshots/Surya+Headshot.jpg'),
        },
        {
            name: "Miguel Jara",
            position: "Workshop Lead",
            linkedin: "https://www.linkedin.com/in/miguel-jar/",
            imgSrc: require('../assets/headshots/Miguel+Headshot.jpg'),
        },
        {
            name: "Connor Munjed",
            position: "Social Lead",
            linkedin: "https://www.linkedin.com/in/connor-munjed-58a171289/",
            imgSrc: require('../assets/headshots/Connor+Headshot.jpg'),
        },
        
    ]
    const officers3 = [
        {
            name: "Jacob Hoppenstedt",
            position: "Social Lead",
            linkedin: "https://www.linkedin.com/in/jacob-hoppenstedt/",
            imgSrc: require('../assets/headshots/Jacob+Headshot.jpg'),
        },
        {
            name: "Jonathan Zhang",
            position: "Mentorship Lead",
            linkedin: "https://www.linkedin.com/in/jonathanzhang53/",
            imgSrc: require('../assets/headshots/Jonathan+Headshot.png'),
        },
        {
            name: "Surya Karthikeyan Vijayalakshmi",
            position: "Graphic Design Lead",
            linkedin: "https://www.linkedin.com/in/kvsurya/",
            imgSrc: require('../assets/headshots/Surya+Headshot.jpg'),
        },
        {
            name: "Justin Adam",
            position: "Opportunity Lead",
            linkedin: "https://www.linkedin.com/in/justin-adam/",
            imgSrc: require('../assets/headshots/Justin+Headshot.png'),
        },
    ]
    return (
        <div className='bg-[#18191A]' >
            <h1 className="flex justify-evenly">Officers</h1>
            <div className='flex justify-center'>
                {officers1.map((group) => (
                    <Officer name={group.name} position={group.position} linkedin={group.linkedin} imgSrc={group.imgSrc} />
                ))}
            </div>
            <div className='flex justify-evenly'>
                {officers2.map((group) => (
                    <Officer name={group.name} position={group.position} linkedin={group.linkedin} imgSrc={group.imgSrc} />
                ))}
            </div>
            <div className='flex justify-center'>
                {officers3.map((group) => (
                    <Officer name={group.name} position={group.position} linkedin={group.linkedin} imgSrc={group.imgSrc} />
                ))}
            </div>
        </div>
    )
}

function Officer(group) {
    return (
        <div className='flex justify-evenly pt-8 officer'>
            <div className="text-center">
                <img className='officer-img' src={group.imgSrc} alt={group.name} />
                    <p className='text-lg officer-text-0'>{group.position}</p>
                    <div className='officer-text-centered-label hover-underline-animation'>
                        <span> <a className="text-lg officer-text" href={group.linkedin}>{group.name}<IoIosArrowForward className='officer-arrow'/></a></span>
                    </div>

            </div>
        </div>
    )
}


export default Officers;