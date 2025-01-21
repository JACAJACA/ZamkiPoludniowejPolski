import React, { useMemo } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, sizes, spacing } from '../../../constants/theme';
import * as Animatable from 'react-native-animatable';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import CustomHandler from './CustomHandler';
import CustomBackground from './CustomBackground';
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Icon from '../../shared/Icon';
import Divider from '../../shared/Divider';
import SectionHeader from '../../shared/SectionHeader';
import { useTranslation } from 'react-i18next';
import openMaps from '../../../services/openMaps';

const AnimatedDivider = Animated.createAnimatedComponent(Divider);

const TripDetailsCard = ({ trip }) => {
  const { t } = useTranslation();
  const animatedIndex = useSharedValue(0);
  const snapPoints = useMemo(() => ['30%', '80%'], []);

  const titleStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      animatedIndex.value,
      [0, 0.08],
      [colors.white, colors.primary],
    ),
    marginBottom: interpolate(
      animatedIndex.value,
      [0, 0.08],
      [0, 10],
      Extrapolation.CLAMP,
    ),
  }));

  const locationStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      animatedIndex.value,
      [0, 0.08],
      [colors.white, colors.lightGray],
    ),
    fontSize: interpolate(
      animatedIndex.value,
      [0, 0.08],
      [sizes.title, sizes.body],
      Extrapolation.CLAMP,
    ),
  }));

  const locationIonStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          animatedIndex.value,
          [0, 0.08],
          [0, 1],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }));

  const contentStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          animatedIndex.value,
          [0, 0.08],
          [40, 0],
          Extrapolation.CLAMP,
        ),
      },
    ],
    opacity: interpolate(
      animatedIndex.value,
      [0, 0.08],
      [0, 1],
      Extrapolation.CLAMP,
    ),
  }));

  return (
    <BottomSheet
      index={0}
      animatedIndex={animatedIndex}
      snapPoints={snapPoints}
      backgroundComponent={CustomBackground}
      handleComponent={CustomHandler}>
      <Animatable.View
        style={styles.header}
        animation="fadeInUp"
        delay={500}
        easing="ease-in-out"
        duration={400}>
        <Animated.Text style={[styles.title, titleStyle]}>
          {trip.title}
        </Animated.Text>
        <View style={styles.location}>
          <Animated.Text style={[styles.locationText, locationStyle]}>
            {trip.location}
          </Animated.Text>
          <Animated.View style={locationIonStyle}>
            <Icon icon="Location" size={20} style={styles.locationIcon} />
          </Animated.View>
        </View>
      </Animatable.View>
      <AnimatedDivider style={contentStyle} />
      <BottomSheetScrollView
        style={styles.scrollBox}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Animated.View style={contentStyle}>
          <View style={styles.summary}>
            <Text style={styles.summaryText}>{trip.description}</Text>
          </View>
          <View style={styles.mapButtonView}>
            <TouchableOpacity
              style={styles.mapButton}
              onPress={() => openMaps(trip.googleMaps, trip.appleMaps)}
            >
              <Text style={styles.closeButtonText}>{t('map.navigate')}</Text>
            </TouchableOpacity>
          </View>
          <SectionHeader
            title={t('detail.keyInformation')}
            containerStyle={styles.sectionHeader}
            titleStyle={styles.sectionTitle}
          />
          <View style={styles.summary}>
            <Text style={styles.detailLabel}>{t('detail.architecturalStyle')}</Text>
            <Text style={styles.detailValue}>{trip.architecturalStyle}</Text>

            <Text style={styles.detailLabel}>{t('detail.area')}</Text>
            <Text style={styles.detailValue}>{trip.area}</Text>

            <Text style={styles.detailLabel}>{t('detail.year')}</Text>
            <Text style={styles.detailValue}>{trip.completed}</Text>

            <Text style={styles.detailLabel}>{t('detail.features')}</Text>
            {trip.features.map((feature, index) => (
              <Text key={index} style={styles.featureItem}>• {feature}</Text>
            ))}

            <Text style={styles.detailLabel}>{t('detail.hours')}</Text>
            <Text style={styles.detailValue}>{trip.openingHours}</Text>

            <Text style={styles.detailLabel}>{t('detail.ticket')}</Text>
            <Text style={styles.detailValue}>
              {t('detail.adults')} {trip.ticketPrices.adults}, {t('detail.children')} {trip.ticketPrices.children}
            </Text>
          </View>
          <SectionHeader
            title={t('detail.description')}
            containerStyle={styles.sectionHeader}
            titleStyle={styles.sectionTitle}
          />
          <View style={styles.summary}>
            <Text style={styles.summaryText}>{trip.fullDescription}</Text>
          </View>
        </Animated.View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  details: {
    marginVertical: spacing.m,
    marginHorizontal: spacing.l,
  },
  detailLabel: {
    fontSize: sizes.caption,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: spacing.s,
  },
  detailValue: {
    fontSize: sizes.body,
    color: colors.gray,
  },
  featureItem: {
    fontSize: sizes.body,
    color: colors.gray,
    marginLeft: spacing.s,
  },
  header: {
    paddingVertical: spacing.l,
    paddingHorizontal: spacing.l,
  },
  title: {
    fontSize: sizes.title,
    fontWeight: 'bold',
    color: colors.white,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  locationText: {
    fontSize: sizes.title,
    color: colors.white,
  },
  locationIcon: {
    tintColor: colors.gray,
  },
  scrollBox: {
    marginTop: spacing.s,
    marginBottom: spacing.m,
  },
  sectionHeader: {
    marginTop: spacing.m,
  },
  sectionTitle: {
    color: colors.lightGray,
    fontWeight: 'normal',
  },
  miniSectionTitle: {
    marginTop: spacing.s,
    color: colors.gray,
  },
  summary: {
    marginHorizontal: spacing.l,
  },
  summaryText: {
    color: colors.primary,
  },
  rating: {
    marginHorizontal: spacing.l,
  },
  mapButtonView: {
    width: '100%',
    alignItems: 'center',
  },
  mapButton: {
    backgroundColor: colors.black,
    borderRadius: sizes.radius,
    width: '80%',
    marginTop: 20,
    padding: 15,
    elevation: 5,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: sizes.h3
  },
});

export default TripDetailsCard;
