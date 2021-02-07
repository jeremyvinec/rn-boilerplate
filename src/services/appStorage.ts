import AsyncStorage from '@react-native-community/async-storage';
import {Mapping, Theme} from './theme';

const MAPPING_KEY: string = 'mapping';
const THEME_KEY: string = 'theme';
const CURRENT_USER: string = 'currentUser';

export class AppStorage {
  static getMapping = (fallback?: Mapping): Promise<Mapping> => {
    return AsyncStorage.getItem(MAPPING_KEY).then((mapping: Mapping) => {
      return mapping || fallback;
    });
  };

  static getCurrentUser = (): Promise<Mapping> => {
    // toodo
    return AsyncStorage.getItem(CURRENT_USER).then((currentUser: any) => {
      return currentUser;
    });
  };

  static getTheme = (fallback?: Theme): Promise<Theme> => {
    return AsyncStorage.getItem(THEME_KEY).then((theme: Theme) => {
      return theme || fallback;
    });
  };

  static setMapping = (mapping: Mapping): Promise<void> => {
    return AsyncStorage.setItem(MAPPING_KEY, mapping);
  };

  static setTheme = (theme: Theme): Promise<void> => {
    return AsyncStorage.setItem(THEME_KEY, theme);
  };
}
