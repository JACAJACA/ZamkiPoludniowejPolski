import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Carousel from '../src/components/shared/Carousel';
import {View, Text} from 'react-native';

describe('Carousel Component', () => {
  // Test sprawdzający, czy komponent renderuje się bez błędów
  test('renders correctly with no items', () => {
    const {getByTestId} = render(<Carousel items={[]} />);
    const carouselElement = getByTestId('carousel-component');
    expect(carouselElement).toBeTruthy();
  });

  // Test sprawdzający, czy renderuje przedmioty poprawnie
  test('renders items correctly', () => {
    const mockItems = [
      {id: '1', title: 'Item 1'},
      {id: '2', title: 'Item 2'},
    ];
    const mockRenderItem = jest.fn(({item}) => <Text>{item.title}</Text>);
    const {getByText} = render(<Carousel items={mockItems} renderItem={mockRenderItem} />);
    expect(getByText('Item 1')).toBeTruthy();
    expect(getByText('Item 2')).toBeTruthy();
    expect(mockRenderItem).toHaveBeenCalledTimes(mockItems.length);
  });

  // Dodaj test dla przypadku, gdy renderItem nie jest przekazany
  test('renders empty when no renderItem is provided', () => {
    const {queryByText} = render(<Carousel items={[{id: '1', title: 'Item 1'}]} />);
    expect(queryByText('Item 1')).toBeNull();
  });

  // Test sprawdzający, czy `renderItem` jest wywoływany z poprawnymi parametrami
  test('calls renderItem with correct parameters', () => {
    const mockItems = [{id: '1', title: 'Item 1'}];
    const mockRenderItem = jest.fn();
    render(<Carousel items={mockItems} renderItem={mockRenderItem} />);
    expect(mockRenderItem).toHaveBeenCalledWith({
      item: mockItems[0],
      index: 0,
      style: {
        width: 670,
        marginLeft: 24,
        marginRight: 24,
      },
    });
  });

  // Test sprawdzający, czy styl kontenera jest stosowany poprawnie
  test('applies correct container styles', () => {
    const {getByTestId} = render(<Carousel items={[]} />);
    const carouselElement = getByTestId('carousel-component');
    expect(carouselElement).toHaveStyle({
      paddingVertical: expect.any(Number),
    });
  });

  // Test sprawdzający, czy `FlatList` ma poprawne właściwości
  test('has FlatList with correct props', () => {
    const mockItems = [{id: '1', title: 'Item 1'}];
    const {getByTestId} = render(<Carousel items={mockItems} />);
    const flatList = getByTestId('carousel-component');
    expect(flatList.props.horizontal).toBe(true);
    expect(flatList.props.decelerationRate).toBe('fast');
    expect(flatList.props.showsHorizontalScrollIndicator).toBe(false);
  });
});