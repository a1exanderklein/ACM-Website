import React from 'react';
import ParticlesComponent from './ParticlesComponent';

const Home = () => {
  return (
    <div className="relative min-h-screen flex justify-center">
        <ParticlesComponent/>
        <div className="text-center pt-44 translate-y-0 sm:justify-center">
          <p className="text-base font-bold sm:text-lg text-white m-3 hover:scale-105 duration-300">University of Florida’s</p>
          <h1 className="text-4xl font-bold sm:text-6xl text-white hover:scale-105 duration-300">Association for Computing Machinery</h1>
        </div>
    </div>
  );
};

export default Home;
