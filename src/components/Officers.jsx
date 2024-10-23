import * as React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { FaLinkedin } from "react-icons/fa";
import 'swiper/css/pagination';

function Officers() {
    const officers = [
        {
            name: "Norman Bukingolts",
            position: "President",
            linkedin: "https://www.linkedin.com/in/norman-codes/",
            imgSrc: require('../assets/headshots/Norman+Headshot.jpg'),
            bio: "M.S. in AI Systems '26, University of Florida",
        },
        {
            name: "Alexander Klein",
            position: "Internal Vice President",
            linkedin: "https://www.linkedin.com/in/alexanderkleincs/",
            imgSrc: require('../assets/headshots/Alexander+Headshot.jpg'),
            bio: "Incoming Solutions Engineer @ Deloitte, Former Software Engineer Intern @ Akima",

        },
        {
            name: "Surya Karthikeyan Vijayalakshmi",
            position: "External Vice President",
            linkedin: "https://www.linkedin.com/in/kvsurya/",
            imgSrc: require('../assets/headshots/Surya+Headshot.jpg'),
            bio: "Director of Web Development @ University of Florida Homecoming and Gator Growl",

        },
        {
            name: "Jacob Hoppenstedt",
            position: "Secretary",
            linkedin: "https://www.linkedin.com/in/jacob-hoppenstedt/",
            imgSrc: require('../assets/headshots/Jacob+Headshot.jpg'),
            bio: "Former Software Development Engineer Intern @ Publix",

        },
        {
            name: "Connor Munjed",
            position: "Treasurer",
            linkedin: "https://www.linkedin.com/in/connor-munjed-58a171289/",
            imgSrc: require('../assets/headshots/Connor+Headshot.jpg'),
            bio: "Former Software Engineer Intern @ FIS Global",

        },
        {
            name: "Anteneh Zewdie",
            position: "Marketing Lead",
            linkedin: "https://www.linkedin.com/in/antenehzewdie/",
            imgSrc: require('../assets/headshots/Anteneh+Headshot.jpg'),
            bio: "Former Software Engineer Intern @ Prevent Overdose Inc.",

        },
        {
            name: "Jack Crew",
            position: "VP of Professional Affairs",
            linkedin: "https://www.linkedin.com/in/jack-crew/",
            imgSrc: require('../assets/headshots/Jack+Headshot.jpg'),
            bio: "Former Business Development Intern @ TaskUs",

        },
        {
            name: "Alexander Fisher",
            position: "Workshop Lead",
            linkedin: "https://www.linkedin.com/in/alexander-fisher-00209828a/",
            imgSrc: require('../assets/headshots/Fisher+Headshot.jpg'),
            bio: "Incoming Software Engineer Intern @ BNY",

        },
        {
            name: "Kovidh Gandreti",
            position: "Workshop Lead",
            linkedin: "https://www.linkedin.com/in/kovidhgandreti/",
            imgSrc: require('../assets/headshots/Kovidh+Headshot.jpg'),
            bio: "Former Software Engineer Intern @ Lockheed Martin Aeronautics",

        },
        {
            name: "Diego Alvarez d Jesus",
            position: "Social Lead",
            linkedin: "https://www.linkedin.com/in/dalvarezdejesus/",
            imgSrc: require('../assets/headshots/Diego+Headshot.jpg'),
            bio: "Former Software Engineer Intern @ Northrop Grumman",

        },
        {
            name: "Kevin Newbold",
            position: "Social Lead",
            linkedin: "https://www.linkedin.com/in/newbold-kevin/",
            imgSrc: require('../assets/headshots/Kevin+Headshot.jpg'),
            bio: "Former Software Engineer Intern @ DS2",

        },
        {
            name: "Jason Tenczar",
            position: "Graphic Design Lead",
            linkedin: "https://www.linkedin.com/in/jasontenczar/",
            imgSrc: require('../assets/headshots/Jason+Headshot.jpg'),
            bio: "Former Software Engineer Intern @ Integris Group",

        },
    ];
    const officers2324 = [
        {
            name: "Victor Polisetty",
            position: "President",
            linkedin: "https://www.linkedin.com/in/victorpolisetty/",
            imgSrc: require('../assets/headshots/Victor+Headshots.jpg'),
            bio: "Former Software Engineer Intern @ Linkedin & Amazon",
        },
        {
            name: "Norman Bukingolts",
            position: "External Vice President",
            linkedin: "https://www.linkedin.com/in/norman-codes/",
            imgSrc: require('../assets/headshots/Norman+Headshot.jpg'),
            bio: "Former Software Engineer Intern @ University of Florida",

        },
        {
            name: "Courtney Giang",
            position: "Internal Vice President",
            linkedin: "https://www.linkedin.com/in/courtney-giang/",
            imgSrc: require('../assets/headshots/Courtney+Headshot.jpg'),
            bio: "Former Demand Generation Rep Intern @ Amazon, Former Customer Success Intern @ Infotech",

        },
        {
          name: "Alexander Klein",
          position: "Secretary",
          linkedin: "https://www.linkedin.com/in/alexanderkleincs/",
          imgSrc: require('../assets/headshots/Alexander+Headshot.jpg'),
          bio: "Software Engineer Intern @ Akima",

        },
        {
            name: "Shreyas Kodela",
            position: "Treasurer",
            linkedin: "https://www.linkedin.com/in/shreyaskodela/",
            imgSrc: require('../assets/headshots/Shreyas-headshot.jpg'),
            bio: "Application Development Intern @ HNTB",

        },
        {
            name: "Maya Harris",
            position: "Marketing Lead",
            linkedin: "https://www.linkedin.com/in/mjoyharris/",
            imgSrc: require('../assets/headshots/Maya+Headshot.jpg'),
            bio: "Software Engineer @ National Instruments, Former Software Engineer Intern @ National Instruments",

        },
        {
            name: "Jack Crew",
            position: "Professional Affairs Lead",
            linkedin: "https://www.linkedin.com/in/jack-crew/",
            imgSrc: require('../assets/headshots/Jack+Headshot.jpg'),
            bio: "Former Business Development Intern @ TaskUs",

        },
        {
            name: "Andrew Ruales",
            position: "Workshop Lead",
            linkedin: "https://www.linkedin.com/in/andrewruales/",
            imgSrc: require('../assets/headshots/Andrew+Headshot.jpg'),
            bio: "Former Software Engineer Intern @ Google, Former Microsoft Explore Intern",

        },
        {
            name: "Miguel Jara",
            position: "Workshop Lead",
            linkedin: "https://www.linkedin.com/in/miguel-jar/",
            imgSrc: require('../assets/headshots/Miguel+Headshot.jpg'),
            bio: "Former Software Development Engineer Intern @ Amazon",

        },
        {
            name: "Connor Munjed",
            position: "Social Lead",
            linkedin: "https://www.linkedin.com/in/connor-munjed-58a171289/",
            imgSrc: require('../assets/headshots/Connor+Headshot.jpg'),
            bio: "Software Engineer Intern @ FIS Global",

        },
        {
            name: "Jacob Hoppenstedt",
            position: "Social Lead",
            linkedin: "https://www.linkedin.com/in/jacob-hoppenstedt/",
            imgSrc: require('../assets/headshots/Jacob+Headshot.jpg'),
            bio: "Software Development Engineer Intern @ Publix",

        },
        {
            name: "Jonathan Zhang",
            position: "Mentorship Lead",
            linkedin: "https://www.linkedin.com/in/jonathanzhang53/",
            imgSrc: require('../assets/headshots/Jonathan+Headshot.png'),
            bio: "Former Software Engineer Intern @ Amazon",

        },
        {
            name: "Surya Karthikeyan Vijayalakshmi",
            position: "Graphic Design Lead",
            linkedin: "https://www.linkedin.com/in/kvsurya/",
            imgSrc: require('../assets/headshots/Surya+Headshot.jpg'),
            bio: "Software Engineer Intern @ Exelon",

        },
        {
            name: "Justin Adam",
            position: "Opportunity Lead",
            linkedin: "https://www.linkedin.com/in/justin-adam/",
            imgSrc: require('../assets/headshots/Justin+Headshot.png'),
            bio: "Software Engineer Intern @ Bloomberg, Former Software Engineer Intern @ Asana, Wells Fargo",

        },
    ];

    const [activeOfficer, setActiveOfficer] = useState(officers[0]);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640 || window.innerHeight < 632);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640 || window.innerHeight < 632);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerClass = isMobile ? 'flexMobile' : 'flexDefault';
    const officerClass = isMobile ? 'officerMobile' : 'officerCard';

    const mobileInfoStyle = isMobile ? { height: '50vh', overflowY: 'auto' } : {};

    return (
        
        <div className='officerCardBg'>
            <div className={containerClass}>
                <div style={mobileInfoStyle} className="bg-[#0000008e] sm:w-1/2 flex-col items-center justify-center">
                    <h1 className="text-center text-white text-4xl py-8">Meet The Officers</h1>
                    <div className="text-center">
                            <h2 className="text-5xl gradient-text2 p-3">{activeOfficer.name}</h2>
                            <p className="text-3xl gradient-text1 p-3">{activeOfficer.position}</p>
                            <div className="flex justify-center">
                                <p className="dm-mono text-sm p-3 sm:text-md md:text-lg outline-gray-500 w-5/6 text-center sm:w-1/2">{activeOfficer.bio}</p>
                            </div>
                    </div>
                </div>
                <div className="bg-[#0000008e] pt-10 pb-10 sm:w-1/2 ">
                    <Swiper
                        pagination={true}
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                        spaceBetween={30}
                        onSlideChange={(swiper) => setActiveOfficer(officers[swiper.activeIndex])}>   
                        {officers.map((officer, index) => (
                            <SwiperSlide key={index}>
                                <div className='flex flex-col items-center p-4'>
                                    <div className={officerClass}>
                                        <div className="flex flex-col items-center">
                                            <img src={officer.imgSrc} alt={officer.name} className='w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover mb-4'/>
                                            <h2 className='text-md sm:text-2xl text-white text-center'>{officer.name}</h2>
                                            <a href={officer.linkedin} target="_blank" className='text-4x hover:scale-110 linked-in duration-300 mt-2 p-2'>
                                                    <FaLinkedin/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>   
                </div>
            </div>
        </div>
    );
}

export default Officers;