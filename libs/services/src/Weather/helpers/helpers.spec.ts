import {convertToCelsius} from './convertTemperature';

describe('convertTemperature', () => {
  it('should convert kelvin to celsius', () => {
    const result = convertToCelsius(296.15, 'K');
    expect(result).toStrictEqual(23);
  });
  it('should convert farenheit to celsius', () => {
    const result = convertToCelsius(73.4, 'F');
    expect(result).toStrictEqual(23);
  });
  it('should convert celsius to celsius', () => {
    const result = convertToCelsius(23.1, 'C');
    expect(result).toStrictEqual(23);
  });
  it('should throw', () => {
    const result = () => convertToCelsius(23.1, 'X' as 'C');
    expect(result).toThrow(TypeError);
  });
});
