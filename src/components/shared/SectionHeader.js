import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {sizes, spacing, colors} from '../../constants/theme';

const SectionHeader = ({
  title,
  containerStyle,
  titleStyle,
  onPress,
  buttonTitle = 'Button',
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {onPress && <Button title={buttonTitle} onPress={onPress} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: spacing.l,
    marginRight: spacing.m,
    marginBottom: 10,
  },
  title: {
    color: colors.black,
    fontSize: sizes.h3,
    fontWeight: 'bold',
  },
});

export default SectionHeader;
