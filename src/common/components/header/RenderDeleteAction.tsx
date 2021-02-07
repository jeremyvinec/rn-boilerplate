import React from 'react';
import {TopNavigationAction} from '@ui-kitten/components';
import {TrashIcon} from '../icons/Icons';

const RenderDeleteAction = (onPress: () => void) => {
  return <TopNavigationAction onPress={() => onPress} icon={TrashIcon} />;
};

export default RenderDeleteAction;
