import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

function Officers() {
    const officers1 = [
        {
            name: "Connor",
            position: "President",
            linkedin: "https://www.linkedin.com/hp",
            imgSrc: require('../assets/headshots/Connor+Headshot.jpg'),
        },
        {
            name: "Courtney",
            position: "Vice President",
            linkedin: "https://www.linkedin.com/hp",
            imgSrc: require('../assets/headshots/Courtney+Headshot.jpg'),
        },
        {
            name: "Jack",
            position: "Vice-vice President",
            linkedin: "https://www.linkedin.com/hp",
            imgSrc: require('../assets/headshots/Jack+Headshot.jpg'),
        },
        
        
    ]
    const officers2 = [
        {
            name: "Jacob",
            position: "Social Link",
            linkedin: "https://www.linkedin.com/hp",
            imgSrc: require('../assets/headshots/Jacob+Headshot.jpg'),
        },
        {
            name: "Justin",
            position: "Cartographer",
            linkedin: "https://www.linkedin.com/hp",
            imgSrc: require('../assets/headshots/Justin+Headshot.png'),
        },
        {
            name: "Maya",
            position: "Mathmetician",
            linkedin: "https://www.linkedin.com/hp",
            imgSrc: require('../assets/headshots/Maya+Headshot.jpg'),
        },
        {
            name: "Shreyas",
            position: "Historian",
            linkedin: "https://www.linkedin.com/hp",
            imgSrc: require('../assets/headshots/Shreyas-headshot.jpg'),
        },
        {
            name: "Surya",
            position: "Lisan al Gaib",
            linkedin: "https://www.linkedin.com/hp",
            imgSrc: require('../assets/headshots/Surya+Headshot.jpg'),
        },
        {
            name: "Connor",
            position: "Grandfather",
            linkedin: "https://www.linkedin.com/hp",
            imgSrc: require('../assets/headshots/Surya+Headshot.jpg'),
        },
        
    ]
    const officers3 = [
        {
            name: "Connor",
            position: "GIant President",
            linkedin: "https://www.linkedin.com/hp",
            imgSrc: require('../assets/headshots/Connor+Headshot.jpg'),
        },
        {
            name: "Connor",
            position: "Junior Salesman",
            linkedin: "https://www.linkedin.com/hp",
            imgSrc: require('../assets/headshots/Connor+Headshot.jpg'),
        },
        {
            name: "Connor",
            position: "Senior Marketing",
            linkedin: "https://www.linkedin.com/hp",
            imgSrc: require('../assets/headshots/Connor+Headshot.jpg'),
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