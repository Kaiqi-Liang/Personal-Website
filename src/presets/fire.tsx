import { ClickMode } from 'tsparticles';

export default {
  name: 'fire',
  background: {
    color: '#000',
  },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ['#fdcf58', '#757676', '#f27d0c', '#800909', '#f07f13'],
    },
    opacity: {
      value: 0.5,
      random: true,
    },
    size: {
      value: 4,
      random: true,
    },
    move: {
      enable: true,
      speed: 6,
      random: false,
    },
  },
  interactivity: {
    detectsOn: 'window',
    events: {
      onclick: {
        enable: true,
        mode: ClickMode.push,
      },
      resize: true,
    },
  },
  fpsLimit: 40,
};
