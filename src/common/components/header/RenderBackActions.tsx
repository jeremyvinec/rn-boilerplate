import React from 'react';
import {TopNavigationAction} from '@ui-kitten/components';
import {BackIcon} from '../icons/Icons';
import {useNavigation} from '@react-navigation/core';

const RenderBackActions = () => {
  const {goBack} = useNavigation();

  return <TopNavigationAction onPress={() => goBack()} icon={BackIcon} />;
};

export default RenderBackActions;
