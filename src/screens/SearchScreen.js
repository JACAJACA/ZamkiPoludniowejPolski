import React, { useState, useEffect, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../constants/theme';
import MainHeader from '../components/shared/MainHeader';
import SearchInput from '../components/Search/SearchInput';
import Tabs from '../components/shared/Tabs';
import SearchMasonry from '../components/Search/SearchMasonry';
import { useTranslation } from 'react-i18next';
import { usePlaces } from '../data';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { allPlaces, popular } = usePlaces();
  const { t } = useTranslation();

  // Funkcja obsługująca wyszukiwanie
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Aktualizacja filteredData na podstawie searchQuery i allPlaces
  const filteredData = useMemo(() => {
    const normalizedQuery = searchQuery.toLowerCase();
    return allPlaces.filter(
      (item) =>
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.location.toLowerCase().includes(normalizedQuery)
    );
  }, [searchQuery, allPlaces]);
   // Aktualizuj, gdy zmieni się searchQuery lub allPlaces

  // Tablice zakładek
  const tabs = [
    {
      title: t('search.all'),
      content: () => <SearchMasonry key="all" list={filteredData} />,
    },
    {
      title: t('search.castle'),
      content: () => <SearchMasonry key="castle" list={filteredData.filter((item) => item.type === 'castle')} />,
    },
    {
      title: t('search.ruin'),
      content: () => <SearchMasonry key="ruin" list={filteredData.filter((item) => item.type === 'ruin')} />,
    },
    {
      title: t('search.manor'),
      content: () => <SearchMasonry key="manor" list={filteredData.filter((item) => item.type === 'manor')} />,
    }
  ];

  return (
    <View style={styles.container}>
      <MainHeader title={t('search.search')} />
      <SearchInput value={searchQuery} onChangeText={handleSearch} />
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

export default SearchScreen;
