import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from './Icon';
import { colors, sizes, spacing } from '../../constants/theme';
import { useTranslation } from 'react-i18next';
import { changeAndSaveLanguage } from '../../../i18n';
import { LanguageContext } from '../../data/LanguageContext';

const MainHeader = ({ title = '' }) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { t, i18n } = useTranslation();
  const { setLanguage } = useContext(LanguageContext);

  const [modalVisible, setModalVisible] = useState(false);

  const handleLanguageChange = (newLang) => {
    i18n.changeLanguage(newLang);
    changeAndSaveLanguage(newLang);
    setLanguage(newLang);
    setModalVisible(false);
  };

  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <Icon
        icon="Location"
        onPress={() => {
          navigation.navigate('MapScreen');
        }}
      />
      <Text style={styles.title}>{title}</Text>
      <Icon
        style={styles.icon}
        icon="Language"
        onPress={() => setModalVisible(true)}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.languageTitle}>
              {t('language.title')}
            </Text>
            <View style={styles.languageButton}>
              <Text style={styles.languageButtonText} onPress={() => handleLanguageChange('en')}>
                English
              </Text>
            </View>
            <View style={styles.languageButton}>
              <Text style={styles.languageButtonText} onPress={() => handleLanguageChange('pl')}>
                Polski
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.s,
  },
  title: {
    color: colors.black,
    fontSize: sizes.h3,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%', 
    paddingVertical: spacing.m,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
    elevation: spacing.s,
    alignItems: 'center',
  },
  languageButton: {
    backgroundColor: colors.black,
    borderRadius: sizes.radius,
    width: '80%', 
    marginTop: spacing.m,
    padding: 15,
    elevation: 5,
  },
  languageButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: sizes.h3, 
  },
  languageTitle: {
    color: colors.black,
    fontSize: sizes.l,
    fontWeight: 'bold',
  },
});

export default MainHeader;