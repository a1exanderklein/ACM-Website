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
            name: "Victor Polisetty",
            position: "President",
            linkedin: "https://www.linkedin.com/in/victorpolisetty/",
            imgSrc: require('../assets/headshots/Victor+Headshots.jpg'),
            bio: "Victor Bio",
        },
        {
            name: "Norman Bukingolts",
            position: "External Vice President",
            linkedin: "https://www.linkedin.com/in/norman-codes/",
            imgSrc: require('../assets/headshots/Norman+Headshot.jpg'),
            bio: "Norman Bio",

        },
        {
            name: "Courtney Giang",
            position: "Internal Vice President",
            linkedin: "https://www.linkedin.com/in/courtney-giang/",
            imgSrc: require('../assets/headshots/Courtney+Headshot.jpg'),
            bio: "Courtney Bio",

        },
        {
          name: "Alexander Klein",
          position: "Secretary",
          linkedin: "https://www.linkedin.com/in/alexanderkleincs/",
          imgSrc: require('../assets/headshots/Alexander+Headshot.jpg'),
          bio: "Alex Bio",

      },
      {
          name: "Shreyas Kodela",
          position: "Treasurer",
          linkedin: "https://www.linkedin.com/in/shreyaskodela/",
          imgSrc: require('../assets/headshots/Shreyas-headshot.jpg'),
          bio: "Shreyas Bio",

      },
      {
          name: "Maya Harris",
          position: "Marketing Lead",
          linkedin: "https://www.linkedin.com/in/mjoyharris/",
          imgSrc: require('../assets/headshots/Maya+Headshot.jpg'),
          bio: "Maya Bio",

      },
      {
          name: "Jack Crew",
          position: "Professional Affairs Lead",
          linkedin: "https://www.linkedin.com/in/jack-crew/",
          imgSrc: require('../assets/headshots/Jack+Headshot.jpg'),
          bio: "Jack Bio",

      },
      {
          name: "Andrew Ruales",
          position: "Workshop Lead",
          linkedin: "https://www.linkedin.com/in/andrewruales/",
          imgSrc: require('../assets/headshots/Andrew+Headshot.jpg'),
          bio: "Andrew Bio",

      },
      {
          name: "Miguel Jara",
          position: "Workshop Lead",
          linkedin: "https://www.linkedin.com/in/miguel-jar/",
          imgSrc: require('../assets/headshots/Miguel+Headshot.jpg'),
          bio: "Miguel Bio",

      },
      {
          name: "Connor Munjed",
          position: "Social Lead",
          linkedin: "https://www.linkedin.com/in/connor-munjed-58a171289/",
          imgSrc: require('../assets/headshots/Connor+Headshot.jpg'),
          bio: "Connor Bio",

      },
      {
        name: "Jacob Hoppenstedt",
        position: "Social Lead",
        linkedin: "https://www.linkedin.com/in/jacob-hoppenstedt/",
        imgSrc: require('../assets/headshots/Jacob+Headshot.jpg'),
        bio: "Jacob Bio",

    },
    {
        name: "Jonathan Zhang",
        position: "Mentorship Lead",
        linkedin: "https://www.linkedin.com/in/jonathanzhang53/",
        imgSrc: require('../assets/headshots/Jonathan+Headshot.png'),
        bio: "Jonathan Bio",

    },
    {
        name: "Surya Karthikeyan Vijayalakshmi",
        position: "Graphic Design Lead",
        linkedin: "https://www.linkedin.com/in/kvsurya/",
        imgSrc: require('../assets/headshots/Surya+Headshot.jpg'),
        bio: "Surya Bio",

    },
    {
        name: "Justin Adam",
        position: "Opportunity Lead",
        linkedin: "https://www.linkedin.com/in/justin-adam/",
        imgSrc: require('../assets/headshots/Justin+Headshot.png'),
        bio: "Justin Bio",

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


    return (
        
        <div className='officerCardBg'>
            <div className={containerClass}>
                <div className="bg-[#00000066] sm:w-1/2 flex-col items-center justify-center">
                    <h1 className="text-center text-white text-4xl py-8">Meet The Officers</h1>
                    <div className="text-center">
                            <h2 className="text-3xl gradient-text1 p-3">{activeOfficer.name}</h2>
                            <p className="text-2xl gradient-text2 p-3">{activeOfficer.position}</p>
                            <p className="dm-mono text-sm p-3 sm:text-md md:text-lg gradient-text3">{activeOfficer.bio}</p>
                    </div>
                </div>
                <div className="pt-10 pb-10 sm:w-1/2 ">
                    <div className="">
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
                                                <h2 className='text-lg text-white text-center'>{officer.name}</h2>
                                                <a href={officer.linkedin} className='text-3xl text-blue-500 hover:text-blue-700 hover:scale-110 duration-300 mt-2 p-2'>
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
        </div>
    );
}

export default Officers;