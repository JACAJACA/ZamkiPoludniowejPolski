import React, { useContext } from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../constants/theme';
import MainHeader from '../components/shared/MainHeader';
import SearchInput from '../components/Search/SearchInput';
import Tabs from '../components/shared/Tabs';
import SearchMasonry from '../components/Search/SearchMasonry';
import {SEARCH_ALL, SEARCH_HOTELS, SEARCH_PLACES, FAVORITE, ALL} from '../data';
import { FavoritesContext } from '../data/FavoritesContext';
import { usePlaces } from '../data';
import { useTranslation } from 'react-i18next';

const FavoriteScreen = () => {
  const { allPlaces } = usePlaces();
  const { favorites } = useContext(FavoritesContext); // Pobieramy ulubione ID
  const { t } = useTranslation();
  
  // Filtrujemy pełną listę danych, aby znaleźć ulubione elementy
  const favoriteItems = allPlaces.filter((item) => favorites.includes(item.id));

  // Tworzymy dynamiczne zakładki na podstawie ulubionych
  const tabs = [
    {
      title: t('favorite.favorite'),
      content: () => <SearchMasonry key="favorites" list={favoriteItems} />,
    },
  ];

  return (
    <View style={styles.container}>
      <MainHeader title={t('favorite.favorite')} />
      <Tabs items={tabs} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default FavoriteScreen;
