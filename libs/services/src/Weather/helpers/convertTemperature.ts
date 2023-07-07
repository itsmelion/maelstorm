import _ from 'lodash';

import { TempUnit } from '../weather.types';

function convert(value: number, from: `${TempUnit}`, to: `${TempUnit}`) {
  /* eslint-disable indent */
  switch (`${from}-${to}`) {
    case `${TempUnit.Kelvin}-${TempUnit.Celsius}`:
      return value - 273.15;
    case `${TempUnit.Farenheit}-${TempUnit.Celsius}`:
      return (value - 32) / 1.8
    case `${TempUnit.Celsius}-${TempUnit.Celsius}`:
      return value;
    default:
      throw new Error(`cannot match ${from}-${to}`);
  }
  /* eslint-enable indent */
}

export const convertToCelsius = (value: number, from: `${TempUnit}`) => _.round(convert(value, from, 'C'));
