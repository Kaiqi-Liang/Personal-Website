import { ISourceOptions } from 'react-tsparticles';

export default interface Options extends ISourceOptions {
    name: 'bubbles' | 'circles' | 'fire' | 'gumballs' | 'links' | 'molecules' | 'snow' | 'spring' | 'star',
    colorChange?: boolean, // TODO why doesn't this generate an error in App
};
