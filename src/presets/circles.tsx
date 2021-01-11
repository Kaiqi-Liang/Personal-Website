import { InteractivityDetect, MoveDirection, OutMode, ShapeType } from 'tsparticles';
export default {
  name: 'circles',
  background: {
    color: '#000',
  },
  backgroundMode: {
    enable: true,
  },
  particles: {
    number: {
      value: 50,
    },
    color: {
      value: ['#3998D0', '#2EB6AF', '#A9BD33', '#FEC73B', '#F89930', '#F45623', '#D62E32', '#EB586E', '#9952CF'],
    },
    shape: {
      type: ShapeType.circle,
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: 400,
      random: {
        enable: true,
        minimumValue: 200,
      },
    },
    move: {
      enable: true,
      speed: 10,
      direction: MoveDirection.top,
      outMode: OutMode.destroy,
    },
  },
  interactivity: {
    detectsOn: InteractivityDetect.window,
    events: {
      resize: true,
    },
  },
  fpsLimit: 60,
  detectRetina: true,
  emitters: {
    direction: MoveDirection.top,
    position: {
      x: 50,
      y: 120,
    },
    rate: {
      delay: 0.2,
      quantity: 2,
    },
    size: {
      width: 100,
      height: 0,
    },
  },
};
