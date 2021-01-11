import { InteractivityDetect, ClickMode, HoverMode, OutMode, MoveDirection, ShapeType } from 'tsparticles';
export default {
  name: 'bubbles',
  fpsLimit: 60,
  background: {
    color: {
      value: '#000',
    },
  },
  particles: {
    color: {
      value: '#fff',
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outMode: OutMode.bounce,
      random: false,
      speed: 6,
      straight: false
    },
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: ShapeType.circle,
    },
    size: {
      random: true,
      value: 5,
    },
  },
  interactivity: {
    detectsOn: InteractivityDetect.window,
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
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  detectRetina: true,
};
