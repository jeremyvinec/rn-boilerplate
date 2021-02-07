import React, {useState, useEffect, useRef} from 'react';
import {
  Button,
  Input,
  Layout,
  List,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import {RenderItem} from './RenderItem';
import themedStyles from './SearchStyle';
import {useNavigation} from '@react-navigation/core';
import {searchValue} from '../../../features/functions/filters';
import {ArrowIosUpwardIcon} from '../icons/Icons';

interface SearchProps {
  data: Array<any>;
  property: string;
  openSearch: boolean;
}

const Search = ({data, property, openSearch}: SearchProps) => {
  const [searchData, setSearchData] = useState(data);
  const [searchQuery, setSearchQuery] = useState('');
  const flatlistRef = useRef();
  const {navigate} = useNavigation();

  const styles = useStyleSheet(themedStyles);

  const onItemPress = (item: any): void => {
    //navigate && navigate('FooItem', item);
  };

  const handleChange = (search: any) => {
    setSearchQuery(search);
    const newList = searchValue(data, search, 'name');
    setSearchData(newList);
  };

  const renderItem = (info: any): React.ReactElement => {
    return (
      info.item && (
        <RenderItem
          style={styles.item}
          item={info.item}
          index={info.index}
          property={property}
          onPress={() => onItemPress(info.item)}
        />
      )
    );
  };

  const scrollToTop = () => {
    if (flatlistRef.current) {
      flatlistRef.current.scrollToIndex({index: 0});
    }
  };

  useEffect(() => {
    setSearchData(data);
  }, [data]);

  return (
    <>
      {openSearch && (
        <Layout style={styles.header}>
          <Input
            autoCapitalize="none"
            placeholder="Search"
            autoCorrect={false}
            value={searchQuery}
            autoFocus={true}
            onChangeText={handleChange}
          />
        </Layout>
      )}
      {data && data.length > 0 ? (
        <List
          ref={flatlistRef}
          style={styles.list}
          data={searchData}
          renderItem={renderItem}
        />
      ) : (
        <Text appearance="hint" style={styles.notFound}>
          No foo
        </Text>
      )}
      <Layout style={styles.footer} level="2">
        <Button
          status="control"
          appearance="ghost"
          size="small"
          onPress={scrollToTop}
          accessoryLeft={ArrowIosUpwardIcon}
        />
      </Layout>
    </>
  );
};

export default Search;
