import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from './src/locales/en.json';
import pl from './src/locales/pl.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: { translation: en },
      pl: { translation: pl }
    },
    fallbackLng: 'pl',
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react: {
      useSuspense: false // Disable suspense for now
    },
    // Load last used language from AsyncStorage
    initImmediate: false,
  });

// Function to load saved language
const loadLanguage = async () => {
  try {
    const language = await AsyncStorage.getItem('language');
    if (language !== null) {
      i18n.changeLanguage(language);
    } else {
      // Set default language if none was saved
      await AsyncStorage.setItem('language', i18n.language);
    }
  } catch (e) {
    console.error('Failed to load language:', e);
  }
};

// Call this function when initializing the app or when changing the language
loadLanguage();

export default i18n;

// Function to change and save language
export const changeAndSaveLanguage = async (lang) => {
  await i18n.changeLanguage(lang);
  await AsyncStorage.setItem('language', lang);
};