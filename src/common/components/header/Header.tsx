import React from 'react';
import {Layout, TopNavigation} from '@ui-kitten/components';
import {Platform, StyleSheet} from 'react-native';

interface HeaderProps {
  title?: string;
  Subtitle?: string;
  accessoryLeft?: any;
  accessoryRight?: any;
}

const Header = ({
  title,
  Subtitle,
  accessoryLeft,
  accessoryRight,
}: HeaderProps) => {
  return (
    <Layout style={styles.container}>
      <TopNavigation
        alignment="center"
        title={title}
        subtitle={Subtitle}
        appearance="control"
        accessoryLeft={accessoryLeft}
        accessoryRight={accessoryRight}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 50 : 0,
  },
});

export default Header;
