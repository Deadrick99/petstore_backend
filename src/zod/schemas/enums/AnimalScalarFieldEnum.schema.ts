import { z } from 'zod';

export const AnimalScalarFieldEnumSchema = z.enum([
  'ANIMALID',
  'NAME',
  'CATEGORY',
  'BREED',
  'DATEBORN',
  'GENDER',
  'REGISTERED',
  'COLOR',
  'LISTPRICE',
  'PHOTO',
  'IMAGEFILE',
  'IMAGEHEIGHT',
  'IMAGEWIDTH',
]);
