import { Linking, Alert, Platform } from 'react-native';

const openMaps = (googleMaps, appleMaps) => {
    // URL dla Google Maps (z przeglądarką jako fallback)
    const googleMapsUrl = googleMaps;
    // URL dla Apple Maps
    const appleMapsUrl = appleMaps;

    // Wybór odpowiedniego URL w zależności od platformy
    const url = Platform.select({
        ios: appleMapsUrl,
        android: googleMapsUrl,
    });

    // Sprawdzenie, czy URL można otworzyć
    Linking.canOpenURL(url)
        .then((supported) => {
            if (supported) {
                Linking.openURL(url);
            } else {
                Alert.alert('Błąd', 'Nie można otworzyć aplikacji Map.');
            }
        })
        .catch((err) => {
            console.error('Błąd podczas otwierania aplikacji map:', err);
            Alert.alert('Błąd', 'Wystąpił problem podczas otwierania aplikacji.');
        });
};

export default openMaps;