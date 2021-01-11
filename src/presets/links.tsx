import { InteractivityDetect, ClickMode, HoverMode, OutMode, MoveDirection, ShapeType } from 'tsparticles';
export default {
  name: 'links',
  background: {
    color: '#000',
  },
  particles: {
    color: {
      value: '#ff0000',
      animation: {
        enable: true,
        speed: 20,
        sync: true,
      },
    },
    links: {
      color: '#fff',
      distance: 100,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    shape: {
      type: ShapeType.circle,
      stroke: {
        width: 0,
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 3,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0.1,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 6,
      direction: MoveDirection.none,
      random: false,
      straight: false,
      out_mode: OutMode.out,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
    life: {
      duration: {
        sync: false,
        value: 3,
      },
      count: 0,
      delay: {
        random: {
          enable: true,
          minimumValue: 0.5,
        },
        value: 1
      },
    },
  },
  interactivity: {
    detect_on: InteractivityDetect.window,
    events: {
      onClick: {
        enable: true,
        mode: ClickMode.push,
      },
      onHover: {
        enable: true,
        mode: HoverMode.repulse,
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  fpsLimit: 60,
  retina_detect: true,
};
