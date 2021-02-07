import {Spinner} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

interface IProps {
  style?: ViewStyle;
}

export const LoadingIndicator = ({style}: IProps) => (
  <View style={[style, styles.indicator]}>
    <Spinner size="small" />
  </View>
);

const styles = StyleSheet.create({
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
