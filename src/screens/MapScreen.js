import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Image, Modal, Text, Linking, Alert } from 'react-native';
import Icon from '../components/shared/Icon';
import { colors, shadow, sizes, spacing, radius } from '../constants/theme';
import * as Animatable from 'react-native-animatable';
import FavoriteButton from '../components/shared/FavoriteButton';
import openMaps from '../services/openMaps';
import { usePlaces } from '../data';
import { useTranslation } from 'react-i18next';

const { width, height } = Dimensions.get('window');

const mapAspectRatio = 2667 / 926;

// Pobieramy wymiary ekranu urządzenia
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// Wymiary mapy
const mapWidth = 1490;
const mapHeight = 1040;

// Obliczanie proporcji
const ratio = mapHeight / screenHeight;
const scaledWidth = mapWidth / ratio;

/*const mapBounds = {
  minLat: 49.0, maxLat: 51.1,
  minLon: 14.8, maxLon: 24.2
};*/
/*const mapBounds = {
  minLat: 49.400, maxLat: 50.500,
  minLon: 18.500, maxLon: 21.900
};*/
const mapBounds = {
  minLat: 49.150, maxLat: 50.500,
  minLon: 18.800, maxLon: 21.800
};

const convertToPixelCoords = (lat, lon) => {
  const latRange = mapBounds.maxLat - mapBounds.minLat;
  const lonRange = mapBounds.maxLon - mapBounds.minLon;

  const x = ((lon - mapBounds.minLon) / lonRange) * scaledWidth;
  const y = ((mapBounds.maxLat - lat) / latRange) * screenHeight;

  return { x, y };
};

const maps = [
  require('../../assets/images/map_v2.png'),
  require('../../assets/images/route1.png'),
  require('../../assets/images/route2.png'),
  require('../../assets/images/route3.png'),
  require('../../assets/images/route4.png'),
];

const MapScreen = ({ navigation }) => {
  const [selectedCastle, setSelectedCastle] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [showRouteModal, setShowRouteModal] = useState(false);
  const { allPlaces } = usePlaces();
  const { t } = useTranslation();
  const [currentRoute, setCurrentRoute] = useState(null);
  const [currentMap, setCurrentMap] = useState(0);

  const castles = allPlaces.map(castle => ({
    ...castle,
    ...convertToPixelCoords(castle.lat, castle.lon)
  }));

  const openModal = (castle) => {
    setSelectedCastle(castle);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedCastle(null);
    setModalVisible(false);
  };

  const goToTripDetails = () => {
    if (selectedCastle) {
      navigation.navigate('TripDetails', { trip: selectedCastle });
      closeModal();
    }
  };



  return (
    <View style={styles.container}>
      <Animatable.View
        style={[styles.backButton, { marginTop: spacing.m }]}
        animation="fadeIn"
        delay={500}
        duration={400}
        easing="ease-in-out">
        <Icon
          icon="Back"
          viewStyle={styles.backIcon}
          size={24}
          onPress={navigation.goBack}
        />
      </Animatable.View>
      <Animatable.View
        style={[styles.routeButtonContainer, { marginTop: spacing.m, right: spacing.m }]}
        animation="fadeIn"
        delay={500}
        duration={400}
        easing="ease-in-out"
      >
        <TouchableOpacity onPress={() => setShowRouteModal(true)}>
          <Icon
            icon="Hamburger"
            viewStyle={styles.routeMenuButton}
            size={24}
          />
        </TouchableOpacity>
      </Animatable.View>



      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.scrollViewContent}
        showsHorizontalScrollIndicator={false}
      >
        <Image
          source={maps[currentMap]}
          style={[styles.mapImage, { width: scaledWidth }]}
          resizeMode="contain"
        />
        {castles.map((castle, index) => {
          const { x, y } = convertToPixelCoords(castle.lat, castle.lon);
          return (
            <TouchableOpacity
              key={index}
              style={[styles.castleIcon, { left: x, top: y }]}
              onPress={() => openModal(castle)}
            >
              <Icon icon="LocationRed" style={styles.iconStyle} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.centeredView}>
          <TouchableOpacity style={styles.modalView} onPress={goToTripDetails}>
            {selectedCastle && (
              <>
                <Animatable.View
                  style={[styles.backButton, { marginTop: spacing.m }]}
                  animation="fadeIn"
                  delay={500}
                  duration={400}
                  easing="ease-in-out">
                  <Icon
                    icon="Back"
                    viewStyle={styles.backIcon}
                    size={24}
                    onPress={closeModal}
                  />
                </Animatable.View>
                <Animatable.View
                  style={[styles.favoriteButton, { marginTop: spacing.m }]}
                  animation="fadeIn"
                  delay={500}
                  duration={400}
                  easing="ease-in-out">
                  <FavoriteButton id={selectedCastle.id} />
                </Animatable.View>
                <Image source={selectedCastle.image} style={styles.modalImage} />
                <Text style={styles.modalTitle} numberOfLines={1}>{selectedCastle.title}</Text>
                <Text style={styles.modalLocation}>{selectedCastle.location}</Text>
                <TouchableOpacity
                  style={styles.mapButton}
                  onPress={() => openMaps(selectedCastle.googleMaps, selectedCastle.appleMaps)}
                >
                  <Text style={styles.closeButtonText}>{t('map.navigate')}</Text>
                </TouchableOpacity>
              </>
            )}
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showRouteModal}
        onRequestClose={() => setShowRouteModal(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.routeModalView}>
            <Text style={styles.changeRouteText}>
              {t('map.changeRouteText')}
            </Text>
            <Animatable.View
              style={[styles.backButton, { marginTop: spacing.m }]}
              animation="fadeIn"
              delay={500}
              duration={400}
              easing="ease-in-out"
            >
              <Icon
                icon="Back"
                viewStyle={styles.backIcon}
                size={24}
                onPress={() => setShowRouteModal(false)}
              />
            </Animatable.View>

            {['route1', 'route2', 'route3', 'route4'].map((routeName, index) => (
              <TouchableOpacity
                key={routeName}
                style={styles.routeButton}
                onPress={() => {
                  if (index === currentRoute) {
                    setCurrentMap(0);
                  } else {
                    setCurrentMap(index + 1);
                  }
                  setCurrentRoute(index === currentRoute ? null : index);
                  setShowRouteModal(false);
                }}
              >
                <Text style={styles.routeButtonText}>
                  {index === currentRoute ? t('map.hideRoute') : t(`map.${routeName}`)}
                </Text>
              </TouchableOpacity>
            ))}

          </View>
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  scrollViewContent: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  mapImage: {
    height: '100%',
  },
  castleIcon: {
    position: 'absolute',
    width: 1,
    height: 1,
  },
  iconStyle: {
    position: 'absolute',
    width: 30,
    height: 30,
    top: -20,
    left: '50%',
    transform: [{ translateX: -15 }],
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center",
    marginBottom: 100,
  },
  modalView: {
    width: '80%',
    height: '50%',
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
    elevation: spacing.s,
    alignItems: "center",
  },
  backButton: {
    position: 'absolute',
    left: spacing.m,
    zIndex: 10,
    alignSelf: 'flex-start',
  },
  backIcon: {
    backgroundColor: colors.white,
    padding: 4,
    borderRadius: sizes.radius,
    ...shadow.light,
    elevation: 5,
  },
  favoriteButton: {
    position: 'absolute',
    right: spacing.m,
    zIndex: 10,
  },
  modalImage: {
    borderRadius: sizes.radius,
    width: '100%',
    height: '80%',
    marginBottom: 1,
    resizeMode: 'cover',
    zIndex: 1,
  },
  modalTitle: {
    marginVertical: 4,
    marginHorizontal: spacing.s,
    fontSize: sizes.h2,
    fontWeight: 'bold',
    color: colors.primary,
    alignSelf: 'flex-start',
  },
  modalLocation: {
    fontSize: sizes.h3,
    color: colors.lightGray,
    alignSelf: 'flex-start',
    marginHorizontal: spacing.s,
  },
  modalDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 15,
  },
  mapButton: {
    backgroundColor: colors.black,
    borderRadius: sizes.radius,
    width: '100%',
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
  routeButtonContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10,
  },
  routeModalView: {
    width: '80%',
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
    elevation: spacing.s,
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 10,
  },
  changeRouteText: {
    color: colors.black,
    fontSize: sizes.l,
    fontWeight: 'bold',
    position: 'absolute',
    marginTop: 25,
  },
  routeMenuButton: {
    backgroundColor: colors.white,
    padding: 4,
    borderRadius: sizes.radius,
    ...shadow.light,
  },
  routeButton: {
    backgroundColor: colors.black,
    borderRadius: sizes.radius,
    width: '80%',
    padding: 15,
    elevation: 5,
    marginBottom: 10,
  },
  routeButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: sizes.h3,
  },
  routeButtons: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    marginTop: '20%',
  },

});

export default MapScreen;