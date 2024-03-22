import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ACMfish from '../assets/acmfish.png';

export default function ParticlesComponent () {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      className="absolute top-0 left-0 w-full h-full particles-background"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 70,
            density: {
              enable: false,
              value_area: 800,
            },
          },
          color: {
            value: "#FFFFFF",
          },
          shape: {
            type: "image",
            options: {
              image: {
                src: ACMfish,
              },
            },
          },
          opacity: {
            value: 0.6,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 10,
            random: false,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          rotate: {
            value: 0,
            random: false,
            direction: "clockwise",
            animation: {
              enable: true,
              speed: 9,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 300,
            color: "#FFFFFF",
            opacity: 0.4,
            width: 0.5,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            attract: {
              enable: true,
              rotateX: 1200,
              rotateY: 1200,
            },
          },
          collisions: { 
            enable: true,
            mode: "bounce",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 300,
              size: 20,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            grab: {
              distance: 500,
              line_linked: {
                opacity: 1,
              },
            },
            repulse: {
              distance: 75,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
        background: {
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
        fps_limit: 120,
      }}
    />
  );
}