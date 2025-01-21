import React from 'react';
import {StyleSheet} from 'react-native';
import FavoriteButton from '../FavoriteButton';

const CardFavoriteIcon = ({style, id}) => {
  return (
    <FavoriteButton
      style={[styles.icon, style]}
      id={id}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 10,
  },
});

export default CardFavoriteIcon;
