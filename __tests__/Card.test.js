import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Text} from 'react-native';
import Card from '../src/components/shared/Card/Card';

describe('Card Component', () => {
  // Test sprawdzający, czy komponent renderuje się bez błędów
  test('renders correctly with default props', () => {
    const {getByTestId} = render(<Card />);
    const cardElement = getByTestId('card-component');
    expect(cardElement).toBeTruthy();
  });

  // Test sprawdzający, czy dzieci są renderowane poprawnie
  test('renders children', () => {
    const {getByText} = render(
      <Card>
        <Text>Test Child</Text>
      </Card>
    );
    expect(getByText('Test Child')).toBeTruthy();
  });

  // Test sprawdzający, czy `onPress` działa poprawnie
  test('calls onPress when card is pressed', () => {
    const mockOnPress = jest.fn();
    const {getByTestId} = render(<Card onPress={mockOnPress} />);
    const cardElement = getByTestId('card-component');
    fireEvent.press(cardElement);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  // Test sprawdzający, czy style są stosowane poprawnie
  test('applies custom styles', () => {
    const customStyle = {backgroundColor: 'red'};
    const {getByTestId} = render(<Card style={customStyle} />);
    const cardElement = getByTestId('card-component');
    expect(cardElement).toHaveStyle(customStyle);
  });

  // Test sprawdzający, czy różne typy cieni są stosowane poprawnie
  test('applies different shadow types', () => {
    const {getByTestId} = render(<Card shadowType="dark" />);
    const cardElement = getByTestId('card-component');
    expect(cardElement).toHaveStyle({elevation: 8});
  });

  // Test sprawdzający, czy komponent renderuje się z odpowiednimi stylami domyślnymi
  test('has default styles', () => {
    const {getByTestId} = render(<Card />);
    const cardElement = getByTestId('card-component');
    expect(cardElement).toHaveStyle({
      width: 200,
      height: 200,
      backgroundColor: '#fff',
      borderRadius: 16,
      elevation: 8,
    });
  });
});