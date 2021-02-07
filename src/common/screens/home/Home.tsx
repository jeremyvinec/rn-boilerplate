import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  IndexPath,
  Layout,
  Select,
  SelectItem,
  Text,
} from '@ui-kitten/components';
import {
  Header,
  RenderMenuActions,
  RenderSearchActions,
} from '../../components/header';
import useSwr from 'swr';
import Search from '../../components/search/Search';
import {fooService} from '../../../services/network/foo/fooService';
import {Foo} from '../../../services/network/foo/models';
import {sortBy} from '../../../features/functions/sort';
import {FConfig} from '../../config';
import {LoadingIndicator} from '../../components/loading/LoadingIndicator';

const OConfig = ['The most', 'The least'];

const Home = () => {
  const [isChecked, setChecked] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(new IndexPath(0));
  const [selectedNutri, setSelectedNutri] = useState(new IndexPath(0));
  const {data, error} = useSwr<Foo>(
    fooService.paths.getFoo(),
    fooService.client.get,
  );

  const displayOrder = OConfig[selectedOrder.row];
  const displayValue = FConfig[selectedNutri.row];
  const reverse = selectedOrder.row === 0 ? true : false;

  const onSearch = () => {
    setChecked(!isChecked);
  };

  return (
    <Layout style={styles.container}>
      <Header
        title="Foo"
        accessoryLeft={() => <RenderSearchActions onPress={onSearch} />}
        accessoryRight={RenderMenuActions}
      />
      <Text style={styles.lengthResult} category="p2">
        {data ? data.length : 0} results match your search
      </Text>
      <Layout style={styles.header}>
        <Select
          style={styles.select}
          selectedIndex={selectedOrder}
          value={displayOrder}
          onSelect={(index: any) => setSelectedOrder(index)}>
          {OConfig.map((item, index: number) => (
            <SelectItem key={index} title={item} />
          ))}
        </Select>
        <Select
          style={styles.select}
          selectedIndex={selectedNutri}
          value={displayValue.title}
          onSelect={(index: any) => setSelectedNutri(index)}>
          {FConfig.map((item: any, index: number) => (
            <SelectItem key={index} title={item.title} />
          ))}
        </Select>
      </Layout>
      {error && (
        <Text appearance="hint" style={styles.notFound}>
          Failed to load
        </Text>
      )}
      {!data && !error ? (
        <LoadingIndicator />
      ) : (
        <Search
          data={data?.sort(sortBy(displayValue.name, reverse))}
          openSearch={isChecked}
          property={displayValue.name}
        />
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginVertical: 24,
  },
  select: {
    flex: 1,
    marginHorizontal: 4,
  },
  notFound: {
    textAlign: 'center',
  },
  lengthResult: {
    textAlign: 'center',
  },
});

export default Home;
