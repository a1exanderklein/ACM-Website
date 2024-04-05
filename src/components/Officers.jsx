import * as React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

function Officers() {
    const officers = [
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
          imgSrc: require('../assets/headshots/Andrew+Headshot.jpg'),
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
    ];

    return (
        <div className='bg-[#18191A]'>
            <h1 className="text-center text-white text-3xl py-8">Officers</h1>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper">
                {officers.map((officer, index) => (
                    <SwiperSlide key={index}>
                        <div className='flex flex-col items-center p-4'>
                            <img src={officer.imgSrc} alt={officer.name} className='w-32 h-32 rounded-full object-cover mb-4'/>
                            <h2 className='text-lg text-white'>{officer.name}</h2>
                            <p className='text-white'>{officer.position}</p>
                            <a href={officer.linkedin} className='text-blue-500 hover:text-blue-700 mt-2'>
                                LinkedIn 
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Officers;