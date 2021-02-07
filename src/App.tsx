import React, {useEffect} from 'react';
import * as Sentry from '@sentry/react-native';
import {Platform, UIManager} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux/store';
import {SENTRY_DSN, MOCK_API} from './config';
import {enableScreens} from 'react-native-screens';
import {AppearanceProvider} from 'react-native-appearance';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {appMappings, appThemes} from './common/theme/appTheming';
import {Mapping, Theme, Theming} from './services/theme';
import {AppStorage} from './services/appStorage';
import {AppLoading, Task} from './common/theme/appLoading';
import RootErrorBoundary from './features/error-boundary/RootErrorBoundary';
import Navigator from './features/navigation/Navigator';
import {makeMirage} from './services/network/mock/mirage';

const loadingTasks: Task[] = [
  // Should be used it when running Expo.
  // In Bare RN Project this is configured by react-native.config.js
  () =>
    AppStorage.getMapping(defaultConfig.mapping).then((result) => [
      'mapping',
      result,
    ]),
  () =>
    AppStorage.getTheme(defaultConfig.theme).then((result) => [
      'theme',
      result,
    ]),
];

const defaultConfig: {mapping: Mapping; theme: Theme} = {
  mapping: 'eva',
  theme: 'dark',
};

(function setup() {
  // React Navigation, optimize memory usage.
  enableScreens();

  if (typeof SENTRY_DSN === 'string' && SENTRY_DSN.length > 0) {
    Sentry.init({
      dsn: SENTRY_DSN,
    });
  }

  // Layout animation
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  // Mirage – API Mocking
  if (MOCK_API === 'YES') {
    makeMirage();
    __DEV__ && console.log('Mirage Configured');
  }
})();

const App = ({mapping, theme}: any): React.ReactElement => {
  const [mappingContext, currentMapping] = Theming.useMapping(
    appMappings,
    mapping,
  );
  const [themeContext, currentTheme] = Theming.useTheming(
    appThemes,
    mapping,
    theme,
  );

  return (
    <RootErrorBoundary>
      <Provider store={store}>
        <IconRegistry icons={EvaIconsPack} />
        <AppearanceProvider>
          <ApplicationProvider {...currentMapping} theme={currentTheme}>
            <Theming.MappingContext.Provider value={mappingContext}>
              <Theming.ThemeContext.Provider value={themeContext}>
                <SafeAreaProvider>
                  <Navigator />
                </SafeAreaProvider>
              </Theming.ThemeContext.Provider>
            </Theming.MappingContext.Provider>
          </ApplicationProvider>
        </AppearanceProvider>
      </Provider>
    </RootErrorBoundary>
  );
};

export default (): React.ReactElement => (
  <AppLoading tasks={loadingTasks} initialConfig={defaultConfig}>
    {(props) => <App {...props} />}
  </AppLoading>
);
