import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors, sizes, spacing} from '../../constants/theme';

const ScreenHeader = ({mainTitle, secondTitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{mainTitle}</Text>
      <Text style={styles.secondTitle}>{secondTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.l,
    paddingVertical: spacing.s,
  },
  mainTitle: {
    color: colors.black,
    fontSize: sizes.title,
    fontWeight: 'bold',
  },
  secondTitle: {
    color: colors.black,
    fontSize: sizes.title,
  },
});

export default ScreenHeader;
