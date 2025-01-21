import React from 'react';

import MainNavigator from './src/navigations/MainNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FavoritesProvider } from './src/data/FavoritesContext';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { LanguageProvider } from './src/data/LanguageContext';

const App = () => {
  return (
    <LanguageProvider>
    <I18nextProvider i18n={i18n}>
    <FavoritesProvider>
    <GestureHandlerRootView style={{ flex: 1 }}>
      
        <MainNavigator />
      
    </GestureHandlerRootView>
    </FavoritesProvider>
    </I18nextProvider>
    </LanguageProvider>
  );
};

export default App;
