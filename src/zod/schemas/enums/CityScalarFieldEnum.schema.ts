import { z } from 'zod';

export const CityScalarFieldEnumSchema = z.enum([
  'CITYID',
  'ZIPCODE',
  'CITY',
  'STATE',
  'AREACODE',
  'POPULATION1990',
  'POPULATION1980',
  'COUNTRY',
  'LATITUDE',
  'LONGITUDE',
]);
