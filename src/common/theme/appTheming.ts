import * as eva from '@eva-design/eva';
import {default as customEva} from './appMappingEva.json';
import {default as appTheme} from './appTheme.json';

export const appMappings = {
  eva: {
    mapping: eva.mapping,
    customMapping: customEva,
  },
};

export const appThemes = {
  eva: {
    light: eva.light,
    dark: eva.dark,
    brand: {
      light: appTheme,
      dark: appTheme,
    },
  },
};

export const appImages: any = {
  profile: require('../assets/images/image-profile-1.jpg'),
  imageSplash: require('../assets/images/image-splash.png'),
};
