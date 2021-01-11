import { InteractivityDetect, MoveDirection, OutMode, ShapeType } from 'tsparticles';
export default {
  name: 'gumballs',
  background: {
    color: '#000',
  },
  backgroundMode: {
    enable: true,
  },
  particles: {
    number: {
      value: 0,
    },
    collisions: {
      enable: true,
    },
    color: {
      value: ['#5bc0eb', '#fde74c', '#9bc53d', '#e55934', '#fa7921'],
    },
    shape: {
      type: ShapeType.circle,
    },
    opacity: {
      value: 0.5,
      random: false,
      animation: {
        enable: false,
        speed: 1,
        minimumValue: 0.1,
        sync: false,
      },
    },
    size: {
      value: 15,
      random: {
        enable: true,
        minimumValue: 10,
      },
      animation: {
        enable: false,
        speed: 40,
        minimumValue: 0.1,
        sync: false,
      },
    },
    links: {
      enable: false,
    },
    life: {
      duration: {
        sync: true,
        value: 5,
      },
      count: 1,
    },
    move: {
      enable: true,
      gravity: {
        enable: true,
      },
      speed: 10,
      direction: MoveDirection.none,
      random: false,
      straight: false,
      outMode: OutMode.bounce,
    },
  },
  interactivity: {
    detectsOn: InteractivityDetect.window,
    events: {
      resize: true,
    },
  },
  emitters: {
    direction: MoveDirection.top,
    rate: {
      delay: 0.1,
      quantity: 1,
    },
    size: {
      width: 0,
      height: 0,
    },
  },
  fpsLimit: 60,
  detectRetina: true,
};
