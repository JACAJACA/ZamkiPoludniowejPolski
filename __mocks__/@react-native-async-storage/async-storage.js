const mock = {
    setItem: jest.fn((key, value) => {
      return new Promise((resolve) => resolve(value));
    }),
    getItem: jest.fn((key) => {
      return new Promise((resolve) => resolve(null));
    }),
    removeItem: jest.fn((key) => {
      return new Promise((resolve) => resolve());
    }),
    clear: jest.fn(() => {
      return new Promise((resolve) => resolve());
    }),
    getAllKeys: jest.fn(() => {
      return new Promise((resolve) => resolve([]));
    }),
  };
  
  export default mock;