import React from 'react';
import {TopNavigationAction} from '@ui-kitten/components';
import {MenuIcon} from '../icons/Icons';
import {useNavigation} from '@react-navigation/core';

const RenderMenuActions = () => {
  const {navigate} = useNavigation();

  return (
    <TopNavigationAction onPress={() => navigate('Menu')} icon={MenuIcon} />
  );
};

export default RenderMenuActions;
