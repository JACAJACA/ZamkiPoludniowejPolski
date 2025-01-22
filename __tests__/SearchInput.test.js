import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SearchInput from '../src/components/Search/SearchInput'; // Zakładając, że plik jest w tej lokalizacji

describe('SearchInput', () => {
  // Test sprawdzający, czy komponent renderuje się bez błędów
  test('renders correctly', () => {
    const {getByTestId} = render(<SearchInput value="" onChangeText={() => {}} />);
    const searchInput = getByTestId('search-input');
    expect(searchInput).toBeTruthy();
  });

  // Test sprawdzający, czy tekst wprowadzony do pola TextInput jest poprawnie obsługiwany przez `onChangeText`
  test('calls onChangeText when text changes', () => {
    const mockOnChangeText = jest.fn();
    const {getByPlaceholderText} = render(<SearchInput value="" onChangeText={mockOnChangeText} />);
    const input = getByPlaceholderText('Zamek...');
    fireEvent.changeText(input, 'test');
    expect(mockOnChangeText).toHaveBeenCalledWith('test');
  });

  // Test sprawdzający, czy `value` jest wyświetlane w TextInput
  test('displays the correct value in TextInput', () => {
    const {getByPlaceholderText} = render(<SearchInput value="test" onChangeText={() => {}} />);
    const input = getByPlaceholderText('Zamek...');
    expect(input.props.value).toBe('test');
  });
});