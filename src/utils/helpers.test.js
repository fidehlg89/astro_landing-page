import { capitalizeFirstLetter, formatDate } from './helpers';

describe('Helper functions', () => {
  test('capitalizeFirstLetter capitalizes the first letter of a string', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
    expect(capitalizeFirstLetter('world')).toBe('World');
  });

  test('formatDate formats a date correctly', () => {
    const testDate = new Date('2023-05-15T12:00:00Z');
    expect(formatDate(testDate)).toBe('May 15, 2023');
  });
});