import React from 'react';
import {TopNavigationAction} from '@ui-kitten/components';
import {PlusIcon} from '../icons/Icons';
import {useNavigation} from '@react-navigation/core';

interface RenderPlusActionsProps {
  route: string;
}

const RenderPlusActions = ({route}: RenderPlusActionsProps) => {
  const {navigate} = useNavigation();

  return (
    <TopNavigationAction onPress={() => navigate(route)} icon={PlusIcon} />
  );
};

export default RenderPlusActions;
