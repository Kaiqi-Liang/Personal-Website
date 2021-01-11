import { MoveDirection, ShapeType } from "tsparticles";
export default {
  name: 'snow',
  background: {
    color: '#000',
  },
  particles: {
    color: {
      value: "#fff",
    },
    move: {
      bounce: false,
      direction: MoveDirection.bottom,
      enable: true,
      random: false,
      straight: false,
    },
    opacity: {
      random: true,
      value: 0.5,
    },
    shape: {
      type: ShapeType.circle,
    },
    size: {
      random: true,
      value: 10,
    },
  },
};
