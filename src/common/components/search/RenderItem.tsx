import React from 'react';
import {StyleSheet} from 'react-native';
import {ListItem, ListItemProps, Text} from '@ui-kitten/components';

export type RenderItemProps = ListItemProps & {
  item: any;
  index: number;
  property: string;
};

export const RenderItem = ({
  item,
  index,
  property,
  ...listItemProps
}: RenderItemProps): React.ReactElement => {
  const res = property.split('_');
  return (
    <ListItem
      {...listItemProps}
      title={item.alim_nom_eng}
      description={item.alim_grp_nom_eng}
      accessoryRight={() => (
        <>
          <Text appearance="hint" category="p2">
            {item[property]}{' '}
          </Text>
          <Text appearance="hint" category="c1">
            {res[res.length - 2]}/{res[res.length - 1]}
          </Text>
        </>
      )}
      accessoryLeft={() => <Text>{index}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    textAlign: 'right',
    minWidth: 64,
  },
});
