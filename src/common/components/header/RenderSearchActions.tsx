import React from 'react';
import {TopNavigationAction} from '@ui-kitten/components';
import {SearchIcon} from '../icons/Icons';

const RenderSearchActions = ({onPress}: any) => {
  return <TopNavigationAction onPress={onPress} icon={SearchIcon} />;
};

export default RenderSearchActions;
