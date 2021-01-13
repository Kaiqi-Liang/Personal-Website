import { ClickMode, HoverMode, InteractivityDetect, MoveDirection, OutMode, ShapeType } from "react-tsparticles";

export default {
  name: 'connections',
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
      distance: 150,
      enable: true,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outMode: OutMode.bounce,
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 20,
    },
    opacity: {
      value: 0.8,
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
        mode: HoverMode.grab,
      },
    },
    modes: {
      push: {
        quantity: 1,
      },
      grab: {
        distance: 200,
        line_linked: {
          opacity: 0.1,
        },
      },
    },
  },
  fpsLimit: 60,
  detectRetina: true,
};
