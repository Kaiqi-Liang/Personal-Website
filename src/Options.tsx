import { ISourceOptions } from 'react-tsparticles';

export default interface Options extends ISourceOptions {
    name: string,
    colorChange?: boolean, // TODO why doesn't this generate an error in App
};
