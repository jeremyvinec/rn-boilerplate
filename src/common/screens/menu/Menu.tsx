import React from 'react';
import {Linking, TouchableOpacity} from 'react-native';
import {Layout, Text, Toggle, useStyleSheet} from '@ui-kitten/components';
import {Section} from '../../components/section/Section';
import {ThemeContextValue, Theming} from '../../../services/theme';
import {
  Header,
  RenderBackActions,
  RenderMenuActions,
} from '../../components/header';
import themedStyles from './MenuStyles';
import {ScrollView} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import BuyMeACoffee from '../../assets/svg/BuyMeACoffee';

export default ({navigation}: any): React.ReactElement => {
  const themeContext: ThemeContextValue = React.useContext(
    Theming.ThemeContext,
  );

  const styles = useStyleSheet(themedStyles);

  const [darkMode, setDarkMode] = React.useState<boolean>(
    themeContext.currentTheme === 'dark' ? true : false,
  );

  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode);
    const type = !darkMode ? 'dark' : 'light';
    themeContext.setCurrentTheme(type);
  };

  const onPrivacy = () => {
    Linking.openURL('');
  };

  const onTerms = () => {
    Linking.openURL('');
  };

  const buyMeACoffee = () => {
    Linking.openURL('https://jeremyvinec.dev/#/help/buymeacoffee');
  };

  const onData = () => {
    Linking.openURL('');
  };

  return (
    <Layout style={styles.container}>
      <Header
        title="Menu"
        accessoryLeft={RenderBackActions}
        accessoryRight={RenderMenuActions}
      />
      <ScrollView>
        <Section
          style={styles.setting}
          hint="Privacy policy"
          onPress={onPrivacy}
        />
        <Section
          style={styles.setting}
          hint="Terms & Conditions"
          onPress={onTerms}
        />
        <Section
          style={styles.setting}
          hint="Data providers"
          onPress={onData}
        />
        <Section
          style={styles.setting}
          hint="Dark Mode"
          onPress={toggleDarkMode}>
          <Toggle
            status="primary"
            style={styles.toggle}
            checked={darkMode}
            onChange={toggleDarkMode}
          />
        </Section>
        <Section style={styles.setting} hint="Version">
          <Text>{DeviceInfo.getVersion()}</Text>
        </Section>
        <TouchableOpacity style={styles.setting} onPress={buyMeACoffee}>
          <BuyMeACoffee width="140" height="140" styles={styles.buyMeACoffee} />
        </TouchableOpacity>
      </ScrollView>
    </Layout>
  );
};
