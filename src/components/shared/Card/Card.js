import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, shadow, sizes, spacing} from '../../../constants/theme';

const Card = ({children, style, onPress, shadowType = 'light'}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, style, shadow[shadowType]]}>
      <View style={styles.inner}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 200,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
    elevation: spacing.s,
  },
  inner: {
    width: '100%',
    height: '100%',
  },
});

export default Card;
