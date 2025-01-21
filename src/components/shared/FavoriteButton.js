import React, { useContext } from 'react';
import {StyleSheet} from 'react-native';
import {colors, shadow, sizes} from '../../constants/theme';
import Icon from './Icon';
import { FavoritesContext } from '../../data/FavoritesContext';

const FavoriteButton = ({style, id}) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const isFavorite = favorites.includes(id);

  return (
    <Icon
      containerStyle={style}
      viewStyle={styles.view}
      onPress={() => toggleFavorite(id)}
      icon={isFavorite ? 'FavoriteFilled' : 'Favorite'}
      size={24}
    />
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.white,
    padding: 4,
    borderRadius: sizes.radius,
    ...shadow.light,
  },
});

export default FavoriteButton;
