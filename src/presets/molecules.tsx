import { InteractivityDetect, ShapeType } from 'tsparticles';

export default {
  name: 'molecules',
  colorChange: true,
  background: {
    color: '#000',
  },
  particles: {
    color: {
      value: '#fff',
    },
    links: {
      color: '#fff',
      distance: 100,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    number: {
      value: 100,
    },
    shape: {
      type: ShapeType.circle,
    },
    opacity: {
      value: 0.8,
      random: true,
    },
    size: {
      value: 10,
    },
    move: {
      enable: true,
    },
    stroke: {
      color: '#000',
      width: 3,
    },
  },
  interactivity: {
    detectsOn: InteractivityDetect.window,
    events: {
      resize: true,
    },
  },
  fpsLimit: 60,
  retina_detect: true,
};
