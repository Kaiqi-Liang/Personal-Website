import { ISourceOptions } from 'react-tsparticles';

export interface Options extends ISourceOptions { // TODO why doesn't doing something wrong here generate any errors in App.tsx, eg without ? in colorChange, miss one string in name
  name: 'stars' | 'flames' | 'snow' | 'molecules' | 'bubbles' | 'links' | 'circles' | 'gumballs' | 'spring';
  colorChange?: boolean;
};

export interface Context {
  darkTheme: boolean;
  options: Options;
}
