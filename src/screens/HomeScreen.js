import React, { useContext } from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {colors} from '../constants/theme';
import MainHeader from '../components/shared/MainHeader';
import ScreenHeader from '../components/shared/ScreenHeader';
import TopPlacesCarousel from '../components/Home/TopPlacesCarousel';
import SectionHeader from '../components/shared/SectionHeader';
import TripsList from '../components/Home/TripsList';
import { useTranslation } from 'react-i18next';
import { usePlaces } from '../data';

const HomeScreen = () => {
  const { t } = useTranslation();
  const {allPlaces, newPlaces, popular} = usePlaces();

  return (
    <View style={styles.container}>
      <MainHeader title="" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScreenHeader mainTitle={t('home.discover')} secondTitle={t('home.newPlaces')} />
        <TopPlacesCarousel list={newPlaces} />
        <SectionHeader title={t('home.popular')} />
        <TripsList list={popular} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default HomeScreen;