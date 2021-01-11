import { MoveDirection, OutMode, ShapeType } from 'tsparticles';
export default {
  name: 'stars',
  background: {
    color: '#000',
  },
  particles: {
    color: {
      value: '#fff',
    },
    lineLinked: {
      enable: false,
    },
    move: {
      bounce: false,
      direction: MoveDirection.none,
      enable: true,
      outMode: OutMode.out,
      random: true,
      speed: 0.3,
      straight: false,
    },
    opacity: {
      anim: {
        enable: true,
        minimumValue: 0,
        speed: 1,
        sync: false,
      },
      random: true,
      value: 1,
    },
    shape: {
      type: ShapeType.circle,
    },
    size: {
      random: true,
      value: 3,
    },
  },
};
