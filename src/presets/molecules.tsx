import { InteractivityDetect, ShapeType } from 'tsparticles';
export default {
  name: 'molecules',
  fpsLimit: 60,
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
    move: {
      enable: true,
    },
    opacity: {
      value: 1,
      random: true,
    },
    shape: {
      type: ShapeType.circle,
    },
    stroke: {
      color: '#000',
      width: 3,
    },
    size: {
      value: 10,
    },
  },
  interactivity: {
    detectsOn: InteractivityDetect.window,
    events: {
      resize: true,
    },
  },
  retina_detect: true,
};
