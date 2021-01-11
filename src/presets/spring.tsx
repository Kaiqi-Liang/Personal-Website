import { InteractivityDetect, HoverMode, OutMode, MoveDirection, ShapeType, StartValueType, DestroyType } from 'tsparticles';

export default {
  name: 'spring',
  colorChange: true,
  background: {
    color: '#000',
  },
  particles: {
    number: {
      value: 0,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: '#fff',
    },
    shape: {
      type: ShapeType.circle,
    },
    opacity: {
      value: 0.1,
    },
    size: {
      value: 3,
      random: {
        enable: true,
        minimumValue: 1,
      },
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 1,
      },
    },
    move: {
      enable: true,
      speed: 6,
      direction: MoveDirection.none,
      random: false,
      straight: false,
      outMode: OutMode.out,
    },
  },
  interactivity: {
    detectsOn: InteractivityDetect.window,
    events: {
      onHover: {
        enable: true,
        mode: HoverMode.trail,
      },
      resize: true,
    },
    modes: {
      trail: {
        delay: 0.005,
        quantity: 10,
        particles: {
          size: {
            value: 50,
            random: {
              enable: true,
              minimumValue: 10,
            },
            animation: {
              enable: true,
              speed: 5,
              minimumValue: 10,
              sync: true,
              startValue: StartValueType.min,
              destroy: DestroyType.max,
            },
          },
          move: {
            enable: true,
            speed: 20,
            direction: MoveDirection.none,
            random: false,
            straight: false,
            outMode: OutMode.destroy,
          },
        },
      },
    },
  },
  fpsLimit: 60,
  detectRetina: true,
};
