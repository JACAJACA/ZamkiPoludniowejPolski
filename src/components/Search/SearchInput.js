import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Icon from '../shared/Icon';
import {colors, spacing, sizes, shadow} from '../../constants/theme';

const SearchInput = ({value, onChangeText}) => {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.search} pointerEvents="none">
          <Icon icon="Search" />
        </View>
        <TextInput
          style={styles.field}
          placeholder="Zamek..."
          placeholderTextColor="#888"
          value={value}
          onChangeText={onChangeText}
        />
        <View style={styles.filter}>
          <Icon icon="Filter" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.l,
    paddingTop: spacing.l,
    paddingBottom: spacing.l / 1.5,
  },
  inner: {
    flexDirection: 'row',
  },
  search: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
  },
  field: {
    color: colors.black,
    backgroundColor: colors.white,
    paddingLeft: spacing.xl + spacing.s,
    paddingRight: spacing.m,
    paddingVertical: spacing.m,
    borderRadius: sizes.radius,
    height: 54,
    zIndex: 1,
    flex: 1,
    ...shadow.light,
    elevation: spacing.s,
  },
  filter: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
});

export default SearchInput;
