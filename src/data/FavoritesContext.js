import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const FAVORITES_KEY = 'favorites';

    // Załaduj ulubione z AsyncStorage przy starcie aplikacji
    useEffect(() => {
        const loadFavorites = async () => {
            try {
                const storedFavorites = await AsyncStorage.getItem(FAVORITES_KEY);
                if (storedFavorites) {
                    setFavorites(JSON.parse(storedFavorites)); // Ustaw stan ulubionych na zapisane wartości
                }
            } catch (error) {
                console.error('Error loading favorites:', error);
            }
        };

        loadFavorites();
    }, []); // [] oznacza, że funkcja wykona się tylko raz, przy pierwszym renderowaniu

    // Aktualizuj AsyncStorage za każdym razem, gdy zmienia się stan favorites
    useEffect(() => {
        const saveFavorites = async () => {
            try {
                await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
            } catch (error) {
                console.error('Error saving favorites:', error);
            }
        };

        saveFavorites();
    }, [favorites]); // Wykonuj zapis tylko przy zmianie `favorites`

    const toggleFavorite = (id) => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.includes(id)) {
                return prevFavorites.filter((item) => item !== id);
            } else {
                return [...prevFavorites, id];
            }
        });
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};
